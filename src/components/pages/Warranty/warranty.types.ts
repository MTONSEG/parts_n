export interface IWarrantyData {
	title: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	titleBonus: string
	textBonus: string
	bonusIcon: BonusIcon
	items: ItemWarranty[]
}

interface ItemWarranty {
	id: number
	title: string
	text: string
}

export interface BonusIcon {
	data: Daum[]
}

export interface Daum {
	id: number
	attributes: Attributes
}

export interface Attributes {
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
	related: Related[]
}

export interface ProviderMetadata {
	public_id: string
	resource_type: string
}

export interface Related {
	__type: string
	id: number
	title: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	titleBonus: string
	textBonus: string
}
