import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Handbag } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { useTransition, config } from '@react-spring/web'
import { useShoppingCart } from 'use-shopping-cart'

import logoImg from '@/assets/logo.svg'
import { ShopBagModal } from '../ShopBagModal'
import { HeaderContainer, ShopBagButton } from './style'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const transitions = useTransition(isModalOpen, {
    from: { opacity: 0, x: 550 },
    enter: { opacity: 1, x: 10 },
    leave: { opacity: 0, x: 550 },
    config: config.default,
  })

  const { cartCount = 0 } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href="/" aria-label="Página inicial">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Trigger asChild>
          <ShopBagButton
            type="button"
            aria-label={`Sacola de compras com ${cartCount} ${
              cartCount === 1 ? 'produto' : 'produtos'
            }`}
            variant={cartCount > 0 ? 'full' : 'empty'}
          >
            <Handbag size="1.5rem" weight="bold" />
            <strong
              aria-label={`${cartCount} ${
                cartCount === 1 ? 'produto' : 'produtos'
              } na sua sacola`}
            >
              <span>{cartCount >= 10 ? '9+' : cartCount}</span>
            </strong>
          </ShopBagButton>
        </Dialog.Trigger>

        {transitions((styles, item) => {
          return item && <ShopBagModal animationStyles={styles} />
        })}
      </Dialog.Root>
    </HeaderContainer>
  )
}
