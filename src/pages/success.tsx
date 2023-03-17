import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import logoImg from '@/assets/logo.svg'
import { stripe } from '@/lib/stripe'
import {
  Header,
  ImagesContainer,
  CircleContainerImage,
  SuccessContainer,
} from '@/styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    id: string
    imageUrl: string
  }[]
  totalProductsPurchased: number
}

export default function Success({
  customerName,
  products,
  totalProductsPurchased,
}: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <SuccessContainer>
        <ImagesContainer>
          {products.map(({ id, imageUrl }) => {
            return (
              <CircleContainerImage key={id}>
                <Image src={imageUrl} width={130} height={130} alt="" />
              </CircleContainerImage>
            )
          })}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {totalProductsPurchased}{' '}
          {totalProductsPurchased === 1 ? 'camiseta' : 'camisetas'} já está a
          caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name ?? ''

  const products =
    session.line_items?.data.map(({ price }) => {
      const product = price?.product as Stripe.Product

      return {
        id: product.id,
        imageUrl: product.images[0],
      }
    }) ?? []

  const totalProductsPurchased = session.line_items?.data.reduce(
    (acc, { quantity }) => {
      return acc + (quantity ?? 0)
    },
    0,
  )

  return {
    props: {
      customerName,
      products,
      totalProductsPurchased,
    },
  }
}
