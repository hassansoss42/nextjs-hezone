import { useEffect, useState } from 'react'

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

export default useIsMounted
//     <Select
//         onValueChange={(value) => setQuantity(Number(value))}
