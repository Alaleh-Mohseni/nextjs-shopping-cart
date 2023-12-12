'use client'

import { useDispatch } from 'react-redux';

import { addToWishList } from '@/redux/slices/wishSlice'

import { BsBookmark } from "react-icons/bs";


function AddToWishes({ product }) {
    const dispatch = useDispatch();

    function addToWishListHandler(product) {
        dispatch(addToWishList(product))
    }


    return (
        <>
            <div className='hover:bg-slate-50'>
                <BsBookmark onClick={() => addToWishListHandler(product)} />
            </div>
        </>
    )
}

export default AddToWishes