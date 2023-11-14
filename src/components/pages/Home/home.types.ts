export interface HomeData {
	createdAt: string
	updatedAt: string
	publishedAt: string
	banner: Banner
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
	data: Data
}

interface Data {
	id: number
	attributes: Attributes
}

interface Attributes {
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
