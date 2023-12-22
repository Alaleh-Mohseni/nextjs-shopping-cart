import Image from 'next/image'
import Link from 'next/link'

import AddToCart from './AddToCart'
import AddToWishes from './AddToWishes'

import { toFarsi } from '@/app/lib/changeFormat'


function ProductItem({ product }) {
  return (
    <div className='rounded-lg border m-4'>
      <Image
        src={product.image}
        width={400}
        height={400}
        className='object-cover w-full rounded-t-lg'
        alt={product.title}
      />
      <div className='flex flex-col items-start justify-center p-4'>
        <div className='grid grid-cols-4 w-full'>
          <div className='col-span-3'>
            <Link href={`/product/${product.id}`} >
              <h2 className='text-ellipsis overflow-hidden whitespace-nowrap text-sm'>
                {product.title}
              </h2>
            </Link>
          </div>
          <AddToWishes product={product} />
        </div>
        <p className='mt-2 rtl text-sm text-gray-500'>
          {toFarsi(product.price)} تومان
        </p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}

export default ProductItem