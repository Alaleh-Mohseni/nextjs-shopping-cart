import Link from 'next/link'

import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux'

import { BsBookmark } from "react-icons/bs"
import { TfiShoppingCart } from "react-icons/tfi";


function Navbar() {
  const { cartItems } = useSelector((state) => state.cart)
  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    setCartItemsCount(cartItems.reduce((acc, cur) => acc + cur.qty, 0))
  },[])

  // const productCount = cartItems.reduce((acc, cur) => acc + cur.qty, 0)

  return (
    <header className='container m-auto p-4'>
      <nav className='flex justify-between items-center h-12 border-b'>
        <Link href='/' className='text-2xl font-bold'>
          Accessory Market
        </Link>
        <div className='flex items-center'>
          <div className='flex justify-center items-center text-gray-900'>
            <span className='pe-[2px]'>
              ({Number(cartItemsCount).toLocaleString('fa-IR')})
              {/* ({Number(productCount).toLocaleString('fa-IR')}) */}
            </span>
            <Link href='/cart'>
              <TfiShoppingCart size='26' />
            </Link>
          </div>
          <div className='text-gray-900 ml-4'>
            <Link href='/wishes'>
              <BsBookmark size='20' />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
