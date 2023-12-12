import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload

            const existingItem = state.cartItems.find(product => product.id === item.id)

            if (existingItem) {
                state.cartItems = state.cartItems.map(product =>
                    product.id === existingItem.id ? item : product
                )
            } else {
                state.cartItems = [...state.cartItems, item]
            }

            state.itemsPrice = state.cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.qty , 
                0
            )

            state.totalPrice = state.itemsPrice
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(product => product.id !== action.payload)

            state.itemsPrice = state.cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.qty,
                0
            )

            state.totalPrice = state.itemsPrice
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer