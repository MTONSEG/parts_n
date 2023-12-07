import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartStateType } from './cart.types'
import { IProduct } from '../catalog/catalog.types'

const initialState: ICartStateType = {
	cartList: [],
	removeList: [],
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
				state.cartList.push({ ...action.payload, orderQuantity: 1 })
			}
		},
		addToRemoveCartList(state, action: PayloadAction<IProduct>) {
			
		},
		removeFromCart(state, action: PayloadAction<string | number>) {
			state.cartList = state.cartList.filter(
				product => product.id !== action.payload
			)
		},
		toggleCartMenu(state) {
			state.openMenu = !state.openMenu
		},
		incrementQuantity(state, action: PayloadAction<string | number>) {
			state.cartList = state.cartList.map(el => {
				if (action.payload === el.id) {
					el.orderQuantity = el.orderQuantity ? el.orderQuantity + 1 : 1
				}

				return el
			})
		},
		decrementQuantity(state, action: PayloadAction<string | number>) {
			state.cartList = state.cartList.map(el => {
				if (action.payload === el.id) {
					el.orderQuantity =
						el.orderQuantity && el.orderQuantity > 1
							? el.orderQuantity - 1
							: 1
				}

				return el
			})
		},
	},
})

export const { reducer: cartReducer, actions: cartActions } = cartSlice
