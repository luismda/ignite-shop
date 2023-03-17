import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { CartProvider } from 'use-shopping-cart'

import { ToastMessageProvider } from '@/contexts/ToastMessageContext'
import { globalStyle } from '@/styles/global'
import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/app'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

globalStyle()

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe=""
      currency="BRL"
      shouldPersist
    >
      <ToastMessageProvider>
        <Container className={roboto.className}>
          {appProps.router.pathname !== '/success' && <Header />}

          <Component {...pageProps} />
        </Container>
      </ToastMessageProvider>
    </CartProvider>
  )
}
