'use client'

import { useDispatch, useSelector } from 'react-redux'

import { removeFromCart } from '@/redux/slices/cartSlice'

import { FaArrowLeft } from "react-icons/fa6";


function CartPage() {
  const dispatch = useDispatch()

  const { cartItems, totalPrice } = useSelector((state) => state.cart)

  function removeFromCartHandler(id) {
    dispatch(removeFromCart(id))
  }

  return (
    <div className="bg-white pt-8 sm:pt-8 lg:pt-8 rtl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-lg font-semibold text-gray-900">سبد خرید</h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {cartItems.map((item) => (
                    <li
                      className="flex flex-col space-y-3 py-6 text-right sm:flex-row sm:space-x-5 sm:space-y-0"
                      key={item.id}
                    >
                      <div className="shrink-0">
                        <img
                          className="h-24 w-24 max-w-full rounded-lg object-cover"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>

                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2 w-full">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-md text-gray-900">{item.title}</p>
                          </div>

                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 text-md text-gray-900 sm:order-2 sm:ms-8 sm:text-right">{item.price} تومان</p>
                          </div>
                        </div>

                        <div className="absolute top-0 left-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            className='text-white px-2 py-1 rounded-lg bg-slate-900 text-sm'
                            onClick={() => removeFromCartHandler(item.id)}
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <p className="text-sm font-medium text-gray-900">مجموع قیمت</p>
                <p className="text-2xl font-semibold text-gray-900 rtl">
                  {totalPrice}{' '}
                  <span className="text-xs font-normal text-gray-400">تومان</span>
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  ادامه جهت تسویه حساب
                  <FaArrowLeft className='ms-4 transition-all group-hover:ms-8' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage