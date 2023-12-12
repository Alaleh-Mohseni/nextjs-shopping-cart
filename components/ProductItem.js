import Image from 'next/image'
import Link from 'next/link'

import AddToCart from './AddToCart'
import AddToWishes from './AddToWishes'

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
        <div className='flex justify-between w-full'>
          <Link href={`/product/${product.id}`} >
            <h2 className='text-ellipsis overflow-hidden text-sm'>{product.title}</h2>
          </Link>
          <AddToWishes product={product} />
        </div>
        <p className='mt-2 rtl text-sm text-gray-500'>{product.price} تومان</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}

export default ProductItem