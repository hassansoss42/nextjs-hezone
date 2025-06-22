'use client'

import { ShoppingCartIcon } from 'lucide-react'
import useIsMounted from '@/hooks/use-is-mounted'
import { cn } from '@/lib/utils'
import useCartStore from '@/hooks/use-cart-store'
import useCartSidebar from '@/hooks/use-cart-sidebar'

export default function CartButton() {
  const isMounted = useIsMounted()

  const {
    cart: { items },
  } = useCartStore()
  const open = useCartSidebar((state) => state.open) // <-- get the open function
  const isCartSidebarOpen = useCartSidebar((state) => state.isOpen) // <-- get the open state

  const cartItemsCount = items.reduce((a, c) => a + c.quantity, 0)
  return (
    <button
      type='button'
      className='px-1 header-button bg-transparent border-none'
      onClick={open} // <-- open sidebar on click
    >
      <div className='flex items-end text-xs relative'>
        <ShoppingCartIcon className='h-8 w-8' />
        {isMounted && (
          <span
            className={cn(
              `bg-black  px-1 rounded-full text-primary text-base font-bold absolute right-[30px] top-[-4px] z-10`,
              cartItemsCount >= 10 && 'text-sm px-0 p-[1px]'
            )}
          >
            {cartItemsCount}
          </span>
        )}
        <span className='font-bold'>Cart</span>

        {isCartSidebarOpen && (
          <div
            className={`absolute top-[20px] right-[-16px] rotate-[-90deg] z-10 w-0 h-0 border-l-[7px] border-r-[7px] border-b-[8px] border-transparent border-b-background`}
          ></div>
        )}
      </div>
    </button>
  )
}
//                     {FREE_SHIPPING_MIN_PRICE - itemsPrice} more to get free
//                     shipping
//                   </div>
//                 ) : (
//                   <div className='text-center '>
//                     You have free shipping
//                   </div>
//                 )}
//               </div>
//               <div className='flex flex-col gap-2'>
//                 <ProductPrice price={item.price} />
//                 <Link
//                   href='/cart'
//                   className={cn(
//                     buttonVariants({ variant: 'primary' }),
//                     'w-full'
//                   )}
//                 >
//                   Go to cart
//                 </Link>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//       <BrowsingHistoryList />
//     </div>
//   )
// }
