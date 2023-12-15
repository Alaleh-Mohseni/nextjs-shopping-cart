'use client'

import { useDispatch, useSelector } from 'react-redux';

import { addToWishList, removeFromWishList } from '@/redux/slices/wishSlice'

import { BsBookmark, BsBookmarkFill } from "react-icons/bs"

import { toast } from 'react-hot-toast'


function AddToWishes({ product }) {
    const dispatch = useDispatch()

    const { wishes } = useSelector((state) => state.wish)

    const existingItem = wishes.find((item) => item.id === product.id)


    function addToWishListHandler(product) {
        dispatch(addToWishList(product))
        toast.success('محصول به لیست علاقه مندی ها اضافه شد')
    }

    function removeFromWishListHandler(product) {
        dispatch(removeFromWishList(product))
        toast.error('محصول از لیست علاقه مندی ها حذف شد')
    }


    return (
        <div className='hover:bg-slate-50 flex justify-end'>
            {!existingItem ? (
                <BsBookmark onClick={() => addToWishListHandler(product)} />
            ) : (
                <BsBookmarkFill onClick={() => removeFromWishListHandler(product.id)} />
            )}
        </div>
    )
}

export default AddToWishes