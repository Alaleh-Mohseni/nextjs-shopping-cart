import { createSlice } from '@reduxjs/toolkit'

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

            if (wishItem >= 0) {
                alert('You can not add this to wishlists!');
            } else {
                state.wishes.push({ ...item })
            }

        },
        removeFromWishList: (state, action) => {
            state.wishes = state.wishes.filter(product => product.id !== action.payload);
        }
    }
})

export const { addToWishList, removeFromWishList } = wishSlice.actions

export default wishSlice.reducer