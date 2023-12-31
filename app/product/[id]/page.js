import Link from 'next/link'

import AddToCart from '@/components/AddToCart'
import AddToWishes from '@/components/AddToWishes'
import Slider from '@/components/Slider'

import { items } from '@/data/items'
import { FaAngleLeft } from "react-icons/fa"

import { toFarsi } from '@/app/lib/changeFormat'


function ProductPage({ params: { id } }) {
  const product = items.products.find(product => product.id === id)

  return (
    <div className='lg:w-3/5 sm:w-full m-auto py-8 px-16 rounded-lg bg-white min-h-screen'>
      <div className='flex justify-center items-center mb-6 font-semibold text-xl'>
        <FaAngleLeft className='pe-2' />
        <Link href='/'>بازگشت به فروشگاه</Link>
      </div>
      <div className='grid md:grid-cols-2'>
        <div>
          <Slider item={product.images} />
        </div>
        <div className='p-5 h-[150px] flex flex-col justify-between'>
          <div>
            <div className='flex justify-between w-full'>
              <h1 className='text-md'>{product.title}</h1>
              <AddToWishes product={product} />
            </div>
            <div>
              <h2 className='text-md my-4 rtl'>
                {toFarsi(product.price)} تومان
              </h2>
            </div>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage