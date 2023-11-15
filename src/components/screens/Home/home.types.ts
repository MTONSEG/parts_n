export interface HomeData {
	data: Data
	meta: Meta
}

interface Data {
	id: number
	attributes: HomeDataAttributes
}

export interface HomeDataAttributes {
	createdAt: string
	updatedAt: string
	publishedAt: string
	banner: Banner
	categories: Categories
	brands: Brands
	benefits: BenefitsHomeData[]
}

export interface Banner {
	id: number
	title: string
	text: string
	titleBtn: string
	subtitle: string
	counter: string
	iconSubtitle: IconSubtitle
	image: Image
	imageTable: ImageTable
}

interface IconSubtitle {
	data: Data2
}

interface Data2 {
	id: number
	attributes: Attributes2
}

interface Attributes2 {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: any
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata
	createdAt: string
	updatedAt: string
}

interface ProviderMetadata {
	public_id: string
	resource_type: string
}

interface Image {
	data: Data3
}

interface Data3 {
	id: number
	attributes: Attributes3
}

interface Attributes3 {
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
	provider_metadata: ProviderMetadata3
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
	provider_metadata: ProviderMetadata2
}

interface ProviderMetadata2 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata3 {
	public_id: string
	resource_type: string
}

interface ImageTable {
	data: Data4
}

interface Data4 {
	id: number
	attributes: Attributes4
}

interface Attributes4 {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: Formats2
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata5
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
	provider_metadata: ProviderMetadata4
}

interface ProviderMetadata4 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata5 {
	public_id: string
	resource_type: string
}

interface Categories {
	data: CategoriesData[]
}

export interface CategoriesData {
	id: number
	attributes: Attributes5
}

interface Attributes5 {
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	color: string
	titleBtn: string
	type: string
	subtitle: any
	path: any
	image: Image2
	keyboards: Keyboards
	matrices: Matrices
	rams: Rams
	storages: Storages
}

interface Image2 {
	data: Data5
}

interface Data5 {
	id: number
	attributes: Attributes6
}

interface Attributes6 {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: Formats3
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata7
	createdAt: string
	updatedAt: string
}

interface Formats3 {
	thumbnail: Thumbnail3
}

interface Thumbnail3 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata6
}

interface ProviderMetadata6 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata7 {
	public_id: string
	resource_type: string
}

interface Keyboards {
	data: Daum2[]
}

interface Daum2 {
	id: number
	attributes: Attributes7
}

interface Attributes7 {
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

 interface Brands {
	data: BrandsHomeData[]
}

export interface BrandsHomeData {
	id: number
	attributes: Attributes8
}

interface Attributes8 {
	name: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	icon: Icon
}

interface Icon {
	data: Data6
}

interface Data6 {
	id: number
	attributes: Attributes9
}

interface Attributes9 {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats?: Formats4
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata9
	createdAt: string
	updatedAt: string
}

interface Formats4 {
	thumbnail: Thumbnail4
}

interface Thumbnail4 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata8
}

interface ProviderMetadata8 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata9 {
	public_id: string
	resource_type: string
}

export interface BenefitsHomeData {
	id: number
	title: string
	text: string
	icon: Icon2
}

interface Icon2 {
	data: Daum4[]
}

interface Daum4 {
	id: number
	attributes: Attributes10
}

interface Attributes10 {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: any
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata10
	createdAt: string
	updatedAt: string
}

interface ProviderMetadata10 {
	public_id: string
	resource_type: string
}

interface Meta {}
