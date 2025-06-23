import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import { redirect } from 'next/navigation'
import { auth } from '../auth'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Checkout page for your purchases',
}
export default async function CheckoutPage() {
  const session = await auth()
  if (!session?.user) {
    redirect('/sign-in?callbackUrl=/checkout')
  }
  return <div>Checkout form</div>
}
