import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import { useToastMessage } from '@/hooks/useToastMessage'
import { priceFormatter } from '@/utils/priceFormatter'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { ProductSkeleton } from '@/components/ProductSkeleton'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    formattedPrice: string
    priceInCents: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addItem } = useShoppingCart()

  const toastMessage = useToastMessage()

  function handleAddProductInShopBag() {
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.priceInCents,
      price_id: product.defaultPriceId,
      image: product.imageUrl,
      currency: 'BRL',
    })

    toastMessage.show({
      type: 'success',
      title: 'Produto adicionado na sua sacola!',
    })
  }

  return (
    <>
      <Head>
        <title>{!isFallback ? `${product.name} |` : ''} Ignite Shop</title>
      </Head>

      {isFallback ? (
        <ProductSkeleton />
      ) : (
        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt="" />
          </ImageContainer>

          <ProductDetails>
            <h1>{product.name}</h1>
            <span>{product.formattedPrice}</span>

            <p>{product.description}</p>

            <button onClick={handleAddProductInShopBag}>
              Colocar na sacola
            </button>
          </ProductDetails>
        </ProductContainer>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: 'prod_NWD7af6KuUrOxu' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id ?? ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        formattedPrice: priceFormatter.format((price.unit_amount ?? 0) / 100),
        priceInCents: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
