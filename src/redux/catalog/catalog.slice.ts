import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	IProduct,
	IProductState,
	ProductInfoItemType,
	SaleSort,
} from './catalog.types'
import { getCatalogProducts, getDevices } from './catalog.api'
import { v4 } from 'uuid'
import { upperFirstLetter } from '../../utils/upperFirstLetter'
import { processInitSetters } from './processAddingFilters'

const initialState: IProductState = {
	status: 'init',
	products: [],
	currentProducts: [],
	grid: true,
	isMountSelect: false,
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
	filterInfo: {
		batteries: [
			{
				id: v4(),
				title: 'Емкость',
				subtitle: 'Емкость аккумулятора',
				value: 'capacity',
				unit: 'mAh',
			},
			{
				id: v4(),
				title: 'Тип батареи',
				subtitle: 'Выберите тип',
				value: 'type',
				unit: '',
			},
			{
				id: v4(),
				title: 'Напряжение',
				subtitle: 'Напряжение аккумулятора',
				value: 'voltage',
				unit: 'W',
			},
		],
		powers: [
			{
				id: v4(),
				title: 'Мощность',
				subtitle: 'Мощность блока питания',
				value: 'power',
				unit: 'W',
			},
			{
				id: v4(),
				title: 'Напряжение',
				subtitle: 'Напряжение блока питания',
				value: 'voltage',
				unit: 'V',
			},
			{
				id: v4(),
				title: 'Сила тока',
				subtitle: 'Сила тока блока питания',
				value: 'amperage',
				unit: 'A',
			},
		],
		matrices: [
			{
				id: v4(),
				title: 'Диагональ',
				subtitle: 'Размер матрицы',
				value: 'size',
				unit: '"',
			},
			{
				id: v4(),
				title: 'Разрешение',
				subtitle: 'Разрешение матрицы',
				value: 'resolution',
				unit: '',
			},
			{
				id: v4(),
				title: 'Тип матрицы',
				subtitle: 'Технология производства',
				value: 'type',
				unit: '',
			},
		],
		keyboards: [
			{
				id: v4(),
				title: 'Подсветка',
				subtitle: 'Подсветка клавиш',
				value: 'backlight',
				unit: '',
			},
			{
				id: v4(),
				title: 'Раскладка',
				subtitle: 'Языки клавиатуры',
				value: 'lang',
				unit: '',
			},
		],
		rams: [
			{ id: v4(), title: 'Объем', subtitle: '', value: 'memory', unit: '' },
			{
				id: v4(),
				title: 'Частота памяти',
				subtitle: 'Количество циклов памяти',
				value: 'speed',
				unit: 'mHz',
			},
			{
				id: v4(),
				title: 'Тип памяти',
				subtitle: 'Технология производства памяти',
				value: 'type',
				unit: '',
			},
		],
		storages: [
			{
				id: v4(),
				title: 'Объем',
				subtitle: 'Объем памяти',
				value: 'memory',
				unit: '',
			},
			{
				id: v4(),
				title: 'Тип',
				subtitle: 'Тип памяти',
				value: 'type',
				unit: '',
			},
			{
				id: v4(),
				title: 'Форм-фактор',
				subtitle: 'Формат модуля памяти',
				value: 'form',
				unit: '',
			},
			{
				id: v4(),
				title: 'Интерфейс',
				subtitle: 'Интерфейс подключения памяти',
				value: 'interface',
				unit: '',
			},
		],
	},
	filterList: {
		batteries: {
			capacity: [],
			type: [],
			voltage: [],
		},
		powers: {
			power: [],
			voltage: [],
			amperage: [],
		},
		matrices: {
			size: [],
			resolution: [],
			type: [],
		},
		keyboards: {
			backlight: [],
			lang: [],
		},
		rams: {
			memory: [],
			speed: [],
			type: [],
		},
		storages: {
			memory: [],
			type: [],
			form: [],
			interface: [],
		},
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
		toggleMountSelect(state) {
			state.isMountSelect = !state.isMountSelect
		},
		setSortView(state, action: PayloadAction<{ id: string | number }>) {
			// state.viewSort.items = state.viewSort.items.map(item => {
			// 	if (item.id === action.payload.id) {
			// 		state.viewSort.currentItem = item.label
			// 	}
			// 	return {
			// 		...item,
			// 		selected: item.id === action.payload.id,
			// 	}
			// })
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
				model: '',
			}

			state.saleSort = null
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getCatalogProducts.pending, state => {
				state.status = 'loading'
			})
			.addCase(getCatalogProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.currentProducts = action.payload

				const type: string =
					action.payload[0].attributes.category.data.attributes.type

				const infoSetters: Record<string, Set<ProductInfoItemType>> = {
					capacity: new Set(),
					voltage: new Set(),
					type: new Set(),
					power: new Set(),
					amperage: new Set(),
					size: new Set(),
					resolution: new Set(),
					backlight: new Set(),
					lang: new Set(),
					memory: new Set(),
					speed: new Set(),
					form: new Set(),
					interface: new Set(),
				}

				processInitSetters(
					type,
					action.payload,
					infoSetters,
					state.filterList
				)

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
					uniqueBrands.add(el?.attributes?.brand.data.attributes.name)
					uniqueModels.add(el?.attributes?.model)
					uniqueSeries.add(el?.attributes?.series)
				})

				// state.brands.options = Array.from(uniqueBrands).map(
				// 	(el, index) => ({
				// 		id: index,
				// 		value: el.toLowerCase(),
				// 		label: upperFirstLetter(el),
				// 	})
				// )

				// state.models.options = Array.from(uniqueModels).map(
				// 	(el, index) => ({
				// 		id: index,
				// 		value: el.toLowerCase(),
				// 		label: upperFirstLetter(el),
				// 	})
				// )

				// state.series.options = Array.from(uniqueSeries).map(
				// 	(el, index) => ({
				// 		id: index,
				// 		value: el?.toLowerCase(),
				// 		label: upperFirstLetter(el),
				// 	})
				// )

				state.status = 'success'
			})
	},
})

export const { reducer: productReducer, actions: productActions } = productSlice
