import type {
	CategoriesType,
	ItemSelectType,
	SortItemType,
	StatusType,
} from '../../models/models'

export interface IProductState {
	products: IProduct[]
	currentProducts: IProduct[]
	status: StatusType
	grid: boolean
	isMountSelect: boolean
	info: IProductInfo
	categories: CategoriesType[]
	viewSort: {
		currentItem: string
		items: ItemSelectType[]
	}
	saleSort: SaleSort
	sortButtons: SortItemType[]
	currentDevice: IDevice
	brands: {
		title: string
		placeholder?: string
		options: ItemSelectType[]
	}
	models: {
		title: string
		placeholder?: string
		options: ItemSelectType[]
	}
	series: {
		title: string
		placeholder?: string
		options: ItemSelectType[]
	}
	filterInfo: IProductInfo
	filterList: FilterListType
}

export type SaleSort = 'hit' | 'hot' | 'sale' | null

export interface IDevice {
	brand: string | undefined
	series: string | undefined
	model: string | undefined
}

export type FilterListType = {
	batteries: {
		capacity: ItemSelectType[]
		type: ItemSelectType[]
		voltage: ItemSelectType[]
		[key: string]: ItemSelectType[]
	}
	powers: {
		power: ItemSelectType[]
		voltage: ItemSelectType[]
		amperage: ItemSelectType[]
		[key: string]: ItemSelectType[]
	}
	matrices: {
		size: ItemSelectType[]
		resolution: ItemSelectType[]
		type: ItemSelectType[]
		[key: string]: ItemSelectType[]
	}
	keyboards: {
		backlight: ItemSelectType[]
		lang: ItemSelectType[]
		[key: string]: ItemSelectType[]
	}
	rams: {
		memory: ItemSelectType[]
		speed: ItemSelectType[]
		type: ItemSelectType[]
		[key: string]: ItemSelectType[]
	}
	storages: {
		memory: ItemSelectType[]
		type: ItemSelectType[]
		form: ItemSelectType[]
		interface: ItemSelectType[]
		[key: string]: ItemSelectType[]
	}
	[key: string]: {
		[key: string]: ItemSelectType[]
	}
}

type ItemInfoProductType = {
	id: string | number
	title: string,
	subtitle?:string
	value: string
	unit: string
}

export interface IProductInfo {
	batteries: ItemInfoProductType[]
	powers: ItemInfoProductType[]
	matrices: ItemInfoProductType[]
	keyboards: ItemInfoProductType[]
	rams: ItemInfoProductType[]
	storages: ItemInfoProductType[]
	[key: string]: ItemInfoProductType[]
}

export interface IRootProduct {
	data: IProduct[]
	meta: Meta
}

export interface IProduct {
	id: number
	attributes: IProductAttributes
}

export interface IProductAttributes {
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	color: string
	model: string
	code: string
	price?: number
	inStock?: boolean
	quantity: number
	category: ProductCategory
	info: ProductInfo[]
	images: ProductImagesData
}

export interface ProductCategory {
	data: Data
}

export interface Data {
	id: number
	attributes: Attributes2
}

export interface Attributes2 {
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	color: string
	titleBtn: string
	type: string
	subtitle?: string
	path: any
}

type ValueInfoType =
	| 'memory'
	| 'speed'
	| 'type'
	| 'voltage'
	| 'capacity'
	| 'power'
	| 'amperage'
	| 'form'
	| 'interface'
	| 'size'
	| 'resolution'
	| 'lang'
	| 'backlight'

export type ProductInfoItemType = number | string | boolean | undefined

export interface ProductInfo {
	id: number
	__component: string
	[key: string]: ProductInfoItemType
	memory?: number
	speed?: number
	type?: string
	capacity?: number
	voltage?: number
	power?: number
	amperage?: number
	form?: string
	interface?: string
	size?: number
	resolution?: string
	lang?: string
	backlight?: boolean
}

export interface ProductImagesData {
	data: ProductImages[]
}

export interface ProductImages {
	id: number
	attributes: ProductImagesAttributes
}

export interface ProductImagesAttributes {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: Formats
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata2
	createdAt: string
	updatedAt: string
}

export interface Formats {
	thumbnail: Thumbnail
}

export interface Thumbnail {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
	public_id: string
	resource_type: string
}

export interface ProviderMetadata2 {
	public_id: string
	resource_type: string
}

export interface Meta {
	pagination: Pagination
}

export interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

export interface DeviceFullData {
	data: DeviceData[]
	meta: DeviceBrandAttributesMeta
}

export interface DeviceData {
	id: number
	attributes: DeviceDataAttributes
}

export interface DeviceDataAttributes {
	model: string
	series: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	brand: DeviceBrandFullData
}

export interface DeviceBrandFullData {
	data: DeviceBrandData
}

export interface DeviceBrandData {
	id: number
	attributes: DeviceBrandAttributes
}

export interface DeviceBrandAttributes {
	name: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	device: boolean
}

export interface DeviceBrandAttributesMeta {
	pagination: DeviceDataPagination
}

export interface DeviceDataPagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}
