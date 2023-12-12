import { configureStore } from '@reduxjs/toolkit'

import cartSliceReducer from './slices/cartSlice'

import wishSliceReducer from './slices/wishSlice'

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        wish: wishSliceReducer,
    }
})