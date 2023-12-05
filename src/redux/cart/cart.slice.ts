import { createSlice } from '@reduxjs/toolkit';
import { ICartStateType } from './cart.types';



const initialState: ICartStateType = {}

const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {},
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice