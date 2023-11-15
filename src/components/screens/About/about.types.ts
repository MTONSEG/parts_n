export interface IAboutData {
	title: string
	text: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	subtitle: string
	about: About[]
	benefit: Benefit[]
}

interface About {
	id: number
	title: string
	text: string
	icon: Icon
}

interface Icon {
	data: Daum2[]
}

interface Daum2 {
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

interface Benefit {
	id: number
	title: string
	text: string
	icon: Icon2
}

interface Icon2 {
	data: Daum3[]
}

interface Daum3 {
	id: number
	attributes: Attributes3
}

interface Attributes3 {
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
	provider_metadata: ProviderMetadata2
	createdAt: string
	updatedAt: string
}

interface ProviderMetadata2 {
	public_id: string
	resource_type: string
}

interface Meta {
	pagination: Pagination
}

interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}
