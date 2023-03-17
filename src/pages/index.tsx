import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Stripe from 'stripe'
import { Handbag, CaretLeft, CaretRight } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { useToastMessage } from '@/hooks/useToastMessage'
import { priceFormatter } from '@/utils/priceFormatter'
import { stripe } from '@/lib/stripe'
import {
  HomeContainer,
  NextSlideButton,
  PrevSlideButton,
  Product,
} from '@/styles/pages/home'

type ProductData = {
  id: string
  name: string
  imageUrl: string
  description: string
  formattedPrice: string
  priceInCents: number
  defaultPriceId: string
}

interface HomeProps {
  products: ProductData[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesPerView = window.innerWidth <= 972 ? 1 : 2.3

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: slidesPerView,
      spacing: 48,
    },
    slideChanged(slider) {
      const currentSlideIndex = slider.track.details.rel
      setCurrentSlide(currentSlideIndex)
    },
  })

  const { addItem } = useShoppingCart()

  const toastMessage = useToastMessage()

  function handleAddProductInShopBag(product: ProductData) {
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

  const totalNumberOfSlides =
    instanceRef.current?.track.details.slides.length ?? 0

  const isFirstSlide = currentSlide === 0

  const isLastSlide =
    currentSlide === totalNumberOfSlides - parseInt(String(slidesPerView))

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        <PrevSlideButton
          aria-label="Voltar na visualização dos produtos"
          disabled={isFirstSlide}
          onClick={() => instanceRef.current?.prev()}
        >
          <CaretLeft size="3rem" />
        </PrevSlideButton>
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.formattedPrice}</span>
                </div>

                <button
                  type="button"
                  aria-label={`Adicionar ${product.name} na sacola de compras`}
                  onClick={() => handleAddProductInShopBag(product)}
                >
                  <Handbag size="2rem" weight="bold" />
                </button>
              </footer>
            </Product>
          )
        })}
        <NextSlideButton
          aria-label="Avançar na visualização dos produtos"
          disabled={isLastSlide}
          onClick={() => instanceRef.current?.next()}
        >
          <CaretRight size="3rem" />
        </NextSlideButton>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      formattedPrice: priceFormatter.format((price.unit_amount ?? 0) / 100),
      priceInCents: price.unit_amount,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
