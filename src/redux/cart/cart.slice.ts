import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartStateType } from './cart.types'
import { IProduct } from '../catalog/catalog.types'

const initialState: ICartStateType = {
	cartList: [],
	open: false,
	title: 'Корзина'
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			if (!state.cartList) state.cartList = []
			
			const isExist: boolean = state.cartList.some(
				el => el.id === action.payload.id
			)

			if (!isExist) {
				state.cartList.push(action.payload)
			}
		},
	},
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice
