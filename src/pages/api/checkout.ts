import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { stripe } from '@/lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const createCheckoutSessionSchema = z.object({
    products: z.array(
      z.object({
        price: z.string(),
        quantity: z.number(),
      }),
    ),
  })

  const { products } = createCheckoutSessionSchema.parse(req.body)

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
