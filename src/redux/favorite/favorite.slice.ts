import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavoriteState } from './favorite.types'
import { IProduct } from '../catalog/catalog.types'

const initialState: IFavoriteState = {
	favorites: [],
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorite(state, action: PayloadAction<IProduct>) {
			if (!state.favorites) state.favorites = []

			const isExist: boolean = state.favorites.some(
				el => el.id === action.payload.id
			)

			if (!isExist) {
				state.favorites.push(action.payload )
			}
		},
		removeFromFavorite(state, action: PayloadAction<string | number>) {
			state.favorites = state.favorites.filter(
				product => product.id !== action.payload
			)
		},
	},
})

export const { reducer: favoriteReducer, actions: favoriteActions } =
	favoriteSlice
