import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import * as Dialog from '@radix-ui/react-dialog'
import { animated } from '@react-spring/web'
import { Handbag, X } from 'phosphor-react'
import axios from 'axios'

import { useToastMessage } from '@/hooks/useToastMessage'
import { priceFormatter } from '@/utils/priceFormatter'
import { ProductInShopBag } from '../ProductInShopBag'
import {
  CloseButton,
  Content,
  Details,
  FinishBuyButton,
  ProductEmptyList,
  ProductList,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from './style'

interface ShopBagModalProps {
  animationStyles: any
}

export function ShopBagModal({ animationStyles }: ShopBagModalProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const {
    cartDetails,
    cartCount = 0,
    totalPrice = 0,
    removeItem,
  } = useShoppingCart()

  const toastMessage = useToastMessage()

  function handleRemoveProductInTheShopBag(productId: string) {
    removeItem(productId)
  }

  async function handleCreateCheckoutSession() {
    try {
      setIsCreatingCheckoutSession(true)

      const productsInCheckout = Object.values(cartDetails ?? {}).map(
        (product) => {
          return {
            price: product.price_id,
            quantity: product.quantity,
          }
        },
      )

      const response = await axios.post<{ checkoutUrl: string }>(
        '/api/checkout',
        {
          products: productsInCheckout,
        },
      )

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      toastMessage.show({
        type: 'error',
        title: 'Não foi possível finalizar a sua compra.',
      })
    }
  }

  const productsInShopBag = Object.values(cartDetails ?? {}).map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price / 100,
      priceId: product.price_id,
      imageUrl: product.image ?? '',
      quantity: product.quantity,
    }
  })

  const totalPriceFormatted = priceFormatter.format(totalPrice / 100)

  const isShopBagEmptyOrIsCreatingCheckout =
    productsInShopBag.length === 0 || isCreatingCheckoutSession

  return (
    <Dialog.Portal forceMount>
      <Content forceMount asChild>
        <animated.div style={animationStyles}>
          <CloseButton aria-label="Fechar">
            <X size="1.5rem" weight="bold" />
          </CloseButton>

          <Dialog.Title>Sacola de compras</Dialog.Title>

          <ScrollAreaRoot>
            <ScrollAreaViewport>
              {productsInShopBag.length === 0 ? (
                <ProductEmptyList>
                  <Handbag size="3rem" />
                  <p>Você ainda não colocou nenhum produto na sua sacola.</p>
                </ProductEmptyList>
              ) : (
                <ProductList>
                  {productsInShopBag.map((product) => {
                    return (
                      <ProductInShopBag
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        quantity={product.quantity}
                        onRemove={() =>
                          handleRemoveProductInTheShopBag(product.id)
                        }
                      />
                    )
                  })}
                </ProductList>
              )}
            </ScrollAreaViewport>

            <ScrollAreaScrollbar orientation="vertical">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>

            <ScrollAreaScrollbar orientation="horizontal">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>

            <ScrollAreaCorner />
          </ScrollAreaRoot>

          <Details>
            <div>
              <span>Quantidade</span>
              <strong>Valor total</strong>
            </div>

            <div>
              <span>
                {cartCount} {cartCount === 1 ? 'item' : 'itens'}
              </span>
              <strong>{totalPriceFormatted}</strong>
            </div>
          </Details>

          <FinishBuyButton
            type="button"
            disabled={isShopBagEmptyOrIsCreatingCheckout}
            onClick={handleCreateCheckoutSession}
          >
            Finalizar compra
          </FinishBuyButton>
        </animated.div>
      </Content>
    </Dialog.Portal>
  )
}
