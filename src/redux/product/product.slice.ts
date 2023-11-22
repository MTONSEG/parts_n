import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IProductState } from './product.types'
// import { getProducts } from './product.api'

const initialState: IProductState = {
	status: 'init',
	products: [],
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		}
	},
	// extraReducers: builder => {
	// 	builder
	// 		.addCase(getProducts.pending, state => {
	// 			state.status = 'loading'
	// 		})
	// 		.addCase(getProducts.fulfilled, (state, action) => {
	// 			state.products = action.payload.data

	// 			state.status = 'success'
	// 		})
	// 		.addCase(getProducts.rejected, state => {
	// 			state.status = 'error'
	// 		})
	// },
})

export const { reducer: productReducer, actions: productActions } = productSlice
