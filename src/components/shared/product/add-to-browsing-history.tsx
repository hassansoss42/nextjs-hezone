'use client'
import useBrowsingHistory from '@/hooks/use-browsing-history'
import { useEffect } from 'react'

export default function AddToBrowsingHistory({
  id,
  category,
}: {
  id: string
  category: string
}) {
  const { addItem } = useBrowsingHistory()
  useEffect(() => {
    console.log('addItem({ id, category })')
    addItem({ id, category })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}
// This component is used to add the product to the browsing history when the product details page is loaded.
// It uses the `useBrowsingHistory` hook to access the browsing history store and add the product.
