'use client'

import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '@/redux/slices/cartSlice'

function AddToCart({ product }) {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)

  function addToCartHandler() {
    let newQty = qty

    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      if (existingItem.qty + 1 <= product.count) {
        newQty = existingItem.qty + 1
      } else {
        return alert('محصول وجود ندارد')
      }
    }

    dispatch(addToCart({ ...product, qty: newQty }))
  }

  return (
    <>
      <div className='bg-gray-900 text-white rounded-lg px-3 py-2 mt-3 hover:bg-gray-800 mx-auto'>
        <button onClick={addToCartHandler} className='text-sm'>افزودن به سبد خرید</button>
      </div>
    </>
  )
}

export default AddToCart
