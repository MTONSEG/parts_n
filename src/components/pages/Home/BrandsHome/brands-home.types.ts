export interface BrandsHomeData {
	id: number
	attributes: Attributes
}

interface Attributes {
	name: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	icon: Icon
}

interface Icon {
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
