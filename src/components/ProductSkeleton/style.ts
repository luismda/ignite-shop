import { styled } from '@/styles'

export const ProductSkeletonContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageSkeletonContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  borderRadius: 8,
})

export const ProductSkeletonDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    marginTop: '1rem',
    fontSize: '$2xl',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
  },
})

export const PriceSkeleton = styled('span', {
  marginTop: '1rem',
  display: 'block',
  fontSize: '$2xl',
})

export const ButtonSkeletonContainer = styled('div', {
  marginTop: 'auto',
})
