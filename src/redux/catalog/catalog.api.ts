import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct, IRootProduct } from './catalog.types'
import { API } from '../../api'

export const getCatalogProducts = createAsyncThunk<
	IProduct[],
	string,
	{ rejectValue: string }
>('api/product', async (category, { rejectWithValue }) => {
	const res = await fetch(
		`${API}/products?filters[category][type]=${category}&populate=*`
	)

	if (!res.ok) throw new Error('Failed to fetching data')

	const data: IRootProduct = await res.json()

	return data.data
})
