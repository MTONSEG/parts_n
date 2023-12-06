import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartStateType } from './cart.types'
import { IProduct } from '../catalog/catalog.types'

const initialState: ICartStateType = {
	cartList: [],
	openMenu: false,
	title: 'Корзина',
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
		removeFromCart(state, action: PayloadAction<string | number>) {
			state.cartList = state.cartList.filter(
				product => product.id !== action.payload
			)
		},
		toggleCartMenu(state) {
			state.openMenu = !state.openMenu
		},
	},
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice
