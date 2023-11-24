import { StatusType } from '../../models/models'

export interface IProductState {
	products: IProduct[]
	status: StatusType
	grid: boolean
	info: IProductInfo
	categories: CategoriesType[]
}
type ItemInfoProductType = {
	id: string | number
	title: string
	value: string,
	unit: string
}

export type CategoriesType =
	| 'batteries'
	| 'powers'
	| 'matrices'
	| 'keyboards'
	| 'rams'
	| 'storages'

export interface IProductInfo {
	batteries: ItemInfoProductType[]
	powers: ItemInfoProductType[]
	matrices: ItemInfoProductType[]
	keyboards: ItemInfoProductType[]
	rams: ItemInfoProductType[]
	storages: ItemInfoProductType[]
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

export interface ProductInfo {
	id: number
	__component: string
	[key: string]: number | string
	// memory?: number
	// speed?: number
	// type?: string
	// capacity?: number
	// voltage?: number
	// power?: number
	// amperage?: number
	// form?: string
	// interface?: string
	// size?: number
	// resolution?: string
	// lang?: string
	// backlight?: boolean
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
