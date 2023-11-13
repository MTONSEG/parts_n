export interface IContactsData {
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	text: string
	address: Address
	email: Email
	tel: Tel
	workTime: WorkTime
}

interface Address {
	id: number
	title: string
	text: string
	icon: Icon
}

interface Icon {
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

interface Email {
	id: number
	title: string
	phone: string
	path: string
	icon: Icon2
}

interface Icon2 {
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
	provider_metadata: ProviderMetadata2
	createdAt: string
	updatedAt: string
}

interface ProviderMetadata2 {
	public_id: string
	resource_type: string
}

interface Tel {
	id: number
	title: string
	phone: string
	path: string
	icon: Icon3
}

interface Icon3 {
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
	formats: any
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

interface ProviderMetadata3 {
	public_id: string
	resource_type: string
}

interface WorkTime {
	id: number
	title: string
	text: string
	icon: Icon4
}

interface Icon4 {
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
	formats: any
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

interface ProviderMetadata4 {
	public_id: string
	resource_type: string
}
