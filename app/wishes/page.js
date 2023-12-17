'use client'

import dynamic from 'next/dynamic'

import { useDispatch, useSelector } from 'react-redux';

import { removeFromWishList } from '@/redux/slices/wishSlice';

import Image from 'next/image'


function WishPage() {
    const dispatch = useDispatch()
    const { wishes } = useSelector((state) => state.wish)

    function removeFromWishListHandler(product) {
        dispatch(removeFromWishList(product))
    }

    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-xl font-semibold'>لیست علاقه مندی ها</h1>
            <div className='container grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 m-auto pt-6'>
                {wishes.map(product => (
                    <div className='rounded-lg border m-5' key={product.id}>
                        <Image
                            src={product.image}
                            width={400}
                            height={400}
                            className='object-cover w-full rounded-t-lg'
                            alt={product.title}
                        />
                        <div className='flex flex-col items-center justify-center p-4 text-xs'>
                            <h2 className='text-ellipsis overflow-hidden'>{product.title}</h2>
                            <p className='mt-2 rtl'>
                                {Number(product.price).toLocaleString('fa-IR')} تومان
                            </p>
                            <div className='bg-gray-900 text-white rounded-md px-2 py-1 mt-3 hover:bg-gray-800'>
                                <button onClick={() => removeFromWishListHandler(product.id)}>حذف</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(WishPage), { ssr: false })