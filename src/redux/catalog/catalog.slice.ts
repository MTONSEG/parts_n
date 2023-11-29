import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDevice, IProduct, IProductState, SaleSort } from './catalog.types'
import { getCatalogProducts, getDevices } from './catalog.api'
import { v4 } from 'uuid'
import { stat } from 'fs'
import { upperFirstLetter } from '../../utils/upperFirstLetter'
import { ItemSelectType } from '../../models/models'

const initialState: IProductState = {
	status: 'init',
	products: [],
	currentProducts: [],
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
	viewSort: {
		currentItem: 'Популярные',
		items: [
			{
				id: v4(),
				label: 'Популярные',
				value: 'popular',
				selected: true,
			},
			{
				id: v4(),
				label: 'от дешевых',
				value: 'priceDown',
				selected: false,
			},
			{
				id: v4(),
				label: 'от дорогих',
				value: 'priceUp',
				selected: false,
			},
		],
	},
	saleSort: null,
	sortButtons: [
		{
			id: v4(),
			label: 'Хиты продаж',
			value: 'hit',
			selected: false,
		},

		{
			id: v4(),
			label: 'Скидки',
			value: 'sale',
			selected: false,
		},

		{
			id: v4(),
			label: 'Горячие новинки',
			value: 'hot',
			selected: false,
		},
	],
	currentDevice: {
		brand: '',
		series: '',
		model: '',
	},
	brands: {
		title: 'Выберите бренд',
		placeholder: 'Бренд',
		options: [],
	},
	models: {
		title: 'Выберите серию',
		placeholder: 'Серия устройства',
		options: [],
	},
	series: {
		title: 'Выберите модель',
		placeholder: 'Модель устройства',
		options: [],
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
		setSortView(state, action: PayloadAction<{ id: string | number }>) {
			state.viewSort.items = state.viewSort.items.map(item => {
				if (item.id === action.payload.id) {
					state.viewSort.currentItem = item.label
				}
				return {
					...item,
					selected: item.id === action.payload.id,
				}
			})
		},
		setSaleSort(state, action: PayloadAction<SaleSort>) {
			if (state.saleSort !== action.payload) {
				state.saleSort = action.payload
				state.sortButtons = state.sortButtons.map(el => {
					return {
						...el,
						selected: action.payload === el.value,
					}
				})
			} else {
				state.saleSort = null
				state.sortButtons = state.sortButtons.map(el => {
					return {
						...el,
						selected: false,
					}
				})
			}
		},
		setCurrentDeviceBrand(state, action: PayloadAction<string | undefined>) {
			state.currentDevice.brand = action.payload
		},
		setCurrentDeviceSeries(state, action: PayloadAction<string | undefined>) {
			state.currentDevice.series = action.payload
		},
		setCurrentDeviceModel(state, action: PayloadAction<string | undefined>) {
			state.currentDevice.model = action.payload
		},
		clearSort(state) {
			state.currentDevice = {
				brand: '',
				series: '',
				model: ''
			}

			state.saleSort = null
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getCatalogProducts.pending, state => {
				state.status = 'loading'
			})
			.addCase(getCatalogProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.currentProducts = action.payload

				state.status = 'success'
			})
			.addCase(getCatalogProducts.rejected, state => {
				state.status = 'error'
			})
			.addCase(getDevices.pending, state => {
				state.status = 'loading'
			})
			.addCase(getDevices.fulfilled, (state, action) => {
				const uniqueBrands = new Set<string>()
				const uniqueModels = new Set<string>()
				const uniqueSeries = new Set<string>()

				action.payload.forEach(el => {
					uniqueBrands.add(el.attributes.brand.data.attributes.name)
					uniqueModels.add(el.attributes.model)
					uniqueSeries.add(el.attributes.series)
				})

				state.brands.options = Array.from(uniqueBrands).map(
					(el, index) => ({
						id: index,
						value: el.toLowerCase(),
						label: upperFirstLetter(el),
					})
				)

				state.models.options = Array.from(uniqueModels).map(
					(el, index) => ({
						id: index,
						value: el.toLowerCase(),
						label: upperFirstLetter(el),
					})
				)

				state.series.options = Array.from(uniqueSeries).map(
					(el, index) => ({
						id: index,
						value: el.toLowerCase(),
						label: upperFirstLetter(el),
					})
				)

				state.status = 'success'
			})
	},
})

export const { reducer: productReducer, actions: productActions } = productSlice
