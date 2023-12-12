import Link from 'next/link'
import Image from 'next/image'

import AddToCart from '@/components/AddToCart'
import AddToWishes from '@/components/AddToWishes'

import { items } from '@/data/items'

function ProductPage({ params: { id } }) {
  const product = items.products.find(product => product.id === id)

  return (
    <div className='w-3/5 m-auto py-8 px-16 rounded-lg bg-white'>
      <div className='mb-6 text-center font-semibold'>
        <Link href='/'>بازگشت به فروشگاه</Link>
      </div>
      <div className='grid md:grid-cols-2'>
        <Image
          src={product.image}
          width={400}
          height={400}
          className='rounded-lg'
        />
        <div className='p-5 flex flex-col justify-between'>
          <div>
            <div className='flex justify-between w-full'>
              <h1 className='text-md'>{product.title}</h1>
              <AddToWishes product={product} />
            </div>
            <div>
              <h2 className='text-md my-4 rtl'>{product.price + ' '}تومان</h2>
            </div>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage