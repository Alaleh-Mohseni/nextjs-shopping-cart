import { createSlice } from '@reduxjs/toolkit'

import Cookies from 'js-cookie'

const initialState = {
    cartItems: Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : [],

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

                Cookies.set("cartItems", JSON.stringify(state.cartItems))
            } else {
                state.cartItems = [...state.cartItems, item]

                Cookies.set("cartItems", JSON.stringify(state.cartItems))
            }

            state.itemsPrice = state.cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.qty , 
                0
            )

            state.totalPrice = state.itemsPrice

            Cookies.set("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(product => product.id !== action.payload)

            state.itemsPrice = state.cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.qty,
                0
            )

            state.totalPrice = state.itemsPrice

            Cookies.set("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer