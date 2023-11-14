export interface CategoryHomeData {
	id: number
	attributes: Attributes
}

interface Attributes {
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	color: string
	titleBtn: string
	type: string
	image: Image
	keyboards: Keyboards
	battaries: Battaries
	matrices: Matrices
}

interface Image {
	data: Data
}

interface Data {
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
	data: any[]
}

interface Battaries {
	data: any[]
}

interface Matrices {
	data: any[]
}
