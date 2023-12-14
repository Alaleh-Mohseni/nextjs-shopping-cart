import { createSlice } from '@reduxjs/toolkit'

import { toast } from 'react-hot-toast'

const initialState = {
    wishes: []
}

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const item = action.payload

            const wishItem = state.wishes.find(product => product?.id === item?.id)

            if (wishItem) {
                toast.error('این محصول قبلا اضافه شده است.')
            } else {
                state.wishes.push({ ...item })
            }

        },
        removeFromWishList: (state, action) => {
            state.wishes = state.wishes.filter(product => product.id !== action.payload)
        }
    }
})

export const { addToWishList, removeFromWishList } = wishSlice.actions

export default wishSlice.reducer