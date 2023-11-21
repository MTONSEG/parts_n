export interface CatalogDataType {
	data: Data
	meta: Meta
}

interface Data {
	id: number
	attributes: CatalogAttributes
}

export interface CatalogAttributes {
	title: string
	subtitle: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	categories: Categories
	brands: BrandsData
}

interface Categories {
	data: CategoriesData[]
}

export interface CategoriesData {
	id: number
	attributes: Attributes2
}

interface Attributes2 {
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	color: string
	titleBtn: string
	type: string
	subtitle: any
	path: any
	image: Image
	keyboards: Keyboards
	matrices: Matrices
	rams: Rams
	storages: Storages
}

interface Image {
	data: Data2
}

interface Data2 {
	id: number
	attributes: ImageAttr
}

export interface ImageAttr {
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

interface Formats {
	thumbnail: Thumbnail
}

interface Thumbnail {
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

interface ProviderMetadata {
	public_id: string
	resource_type: string
}

interface ProviderMetadata2 {
	public_id: string
	resource_type: string
}

interface Keyboards {
	data: Daum2[]
}

interface Daum2 {
	id: number
	attributes: Attributes4
}

interface Attributes4 {
	title: string
	createdAt: string
	updatedAt: string
	publishedAt: string
}

interface Matrices {
	data: any[]
}

interface Rams {
	data: any[]
}

interface Storages {
	data: any[]
}

interface BrandsData {
	data: Brands[]
}

export interface Brands {
	id: number
	attributes: Attributes5
}

interface Attributes5 {
	name: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	device?: boolean
	icon: Icon
}

interface Icon {
	data: Data3
}

interface Data3 {
	id: number
	attributes: Attributes6
}

interface Attributes6 {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats?: Formats2
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata4
	createdAt: string
	updatedAt: string
}

interface Formats2 {
	thumbnail: Thumbnail2
}

interface Thumbnail2 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata3
}

interface ProviderMetadata3 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata4 {
	public_id: string
	resource_type: string
}

interface Meta {}
