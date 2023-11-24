import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IProductState } from './catalog.types'
import { getCatalogProducts } from './catalog.api'
import { v4 } from 'uuid'

const initialState: IProductState = {
	status: 'init',
	products: [],
	grid: true,
	categories: [
		'batteries',
		'powers',
		'matrices',
		'keyboards',
		'rams',
		'storages',
	],
	info: {
		batteries: [
			{ id: v4(), title: 'Тип батарейки:', value: 'type', unit: '' },
			{ id: v4(), title: 'Напряжение:', value: 'voltage', unit: 'W' },
			{ id: v4(), title: 'Емкость:', value: 'capacity', unit: 'mAh' },
		],
		powers: [
			{ id: v4(), title: 'Мощность:', value: 'power', unit: 'W' },
			{ id: v4(), title: 'Напряжение:', value: 'voltage', unit: 'V' },
			{ id: v4(), title: 'Сила тока:', value: 'amperage', unit: 'A' },
		],
		matrices: [
			{ id: v4(), title: 'Диагональ:', value: 'size', unit: '"' },
			{ id: v4(), title: 'Разрешение:', value: 'resolution', unit: '' },
			{ id: v4(), title: 'Тип матрицы:', value: 'type', unit: '' },
		],
		keyboards: [
			{ id: v4(), title: 'Подсветка:', value: 'backlight', unit: '' },
			{ id: v4(), title: 'Раскладка:', value: 'lang', unit: '' },
		],
		rams: [
			{ id: v4(), title: 'Объем:', value: 'memory', unit: '' },
			{ id: v4(), title: 'Частота памяти:', value: 'speed', unit: 'mHz' },
			{ id: v4(), title: 'Тип памяти:', value: 'type', unit: '' },
		],
		storages: [
			{ id: v4(), title: 'Объем:', value: 'memory', unit: '' },
			{ id: v4(), title: 'Тип:', value: 'type', unit: '' },
			{ id: v4(), title: 'Форм-фактор:', value: 'form', unit: '' },
			{ id: v4(), title: 'Интерфейс:', value: 'interface', unit: '' },
		],
	},
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		},
		toggleGrid(state) {
			state.grid = !state.grid
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getCatalogProducts.pending, state => {
				state.status = 'loading'
			})
			.addCase(getCatalogProducts.fulfilled, (state, action) => {
				state.products = action.payload

				state.status = 'success'
			})
			.addCase(getCatalogProducts.rejected, state => {
				state.status = 'error'
			})
	},
})

export const { reducer: productReducer, actions: productActions } = productSlice
