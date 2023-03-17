import Image from 'next/image'

import { priceFormatter } from '@/utils/priceFormatter'
import {
  ImageContainer,
  ProductInShopBagContainer,
  ProductDetails,
} from './style'

interface ProductInShopBagProps {
  name: string
  price: number
  imageUrl: string
  quantity: number
  onRemove: () => void
}

export function ProductInShopBag({
  name,
  price,
  imageUrl,
  quantity,
  onRemove,
}: ProductInShopBagProps) {
  const formattedPrice = priceFormatter.format(price)

  return (
    <ProductInShopBagContainer>
      <ImageContainer>
        <Image src={imageUrl} width={94} height={94} alt="" />
      </ImageContainer>

      <ProductDetails>
        <div>
          <span>{name}</span>
          <strong>{formattedPrice}</strong>
        </div>

        <footer>
          <button type="button" onClick={onRemove}>
            Remover
          </button>

          <span>x{quantity}</span>
        </footer>
      </ProductDetails>
    </ProductInShopBagContainer>
  )
}
