import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	DeviceData,
	DeviceFullData,
	IProduct,
	IRootProduct,
} from './catalog.types'
import { API } from '../../api'

export const getCatalogProducts = createAsyncThunk<
	IProduct[],
	string,
	{ rejectValue: string }
>('api/product', async (category, { rejectWithValue }) => {
	const res = await fetch(
		`${API}/products?filters[category][type]=${category}&populate[device][populate]=*&populate[info][populate]=*&populate[category][populate]=*&populate[images][populate]=`
	)

	if (!res.ok) throw new Error('Failed to fetching data')

	const data: IRootProduct = await res.json()

	return data.data
})

export const getDevices = createAsyncThunk<
	DeviceData[],
	undefined,
	{ rejectValue: string }
>('api/device', async (_, { rejectWithValue }) => {
	const res = await fetch(`${API}/devices?populate[0]=brand.name`)

	if (!res.ok) throw new Error('Failed to fetching data')

	const data: DeviceFullData = await res.json()

	return data.data
})
