'use client'

import { useDispatch, useSelector } from 'react-redux';

import { removeFromWishList } from '@/redux/slices/wishSlice';

import Image from 'next/image'


function WishPage() {
    const dispatch = useDispatch();
    const { wishes } = useSelector((state) => state.wish)


    function removeFromWishListHandler(product) {
        dispatch(removeFromWishList(product))
    }

    return (
        <>
            <h1 className='text-center text-lg'>لیست علاقه مندی ها</h1>
            <div className='container grid grid-cols-6 m-auto pt-6'>
                {wishes.map(product => (
                    <div className='rounded-lg border m-5' key={product.id}>
                        <Image
                            src={product.image}
                            width={400}
                            height={400}
                            className='object-cover w-full rounded-t-lg'
                            alt={product.title}
                        />
                        <div className='flex flex-col items-center justify-center p-5 text-xs'>
                            <h2 className='text-ellipsis overflow-hidden'>{product.title}</h2>
                            <p className='mt-2 rtl'>{product.price} تومان</p>
                            <div className='bg-gray-900 text-white rounded-lg px-3 py-2 mt-3 hover:bg-gray-800'>
                                <button onClick={() => removeFromWishListHandler(product.id)}>حذف</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default WishPage