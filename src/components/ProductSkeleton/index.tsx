import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { theme } from '@/styles'

import {
  ButtonSkeletonContainer,
  ImageSkeletonContainer,
  PriceSkeleton,
  ProductSkeletonContainer,
  ProductSkeletonDetails,
} from './style'

export function ProductSkeleton() {
  return (
    <SkeletonTheme
      baseColor={theme.colors.gray800.value}
      highlightColor={theme.colors.gray600.value}
    >
      <ProductSkeletonContainer>
        <ImageSkeletonContainer>
          <Skeleton height="100%" />
        </ImageSkeletonContainer>

        <ProductSkeletonDetails>
          <h1>
            <Skeleton width="80%" />
          </h1>
          <PriceSkeleton>
            <Skeleton width="30%" />
          </PriceSkeleton>

          <p>
            <Skeleton count={4} />
          </p>

          <ButtonSkeletonContainer>
            <Skeleton height="3.5rem" />
          </ButtonSkeletonContainer>
        </ProductSkeletonDetails>
      </ProductSkeletonContainer>
    </SkeletonTheme>
  )
}
