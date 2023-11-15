export interface IDeliveryData {
	title: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	payment: Payment
	delivery: Delivery
}

interface Payment {
	id: number
	title: string
	types: string
	icon: Icon
	iconVisa: IconVisa
	iconMastercard: IconMastercard
	iconPrivatbank: IconPrivatbank
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

interface IconVisa {
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
	provider_metadata: ProviderMetadata6
	createdAt: string
	updatedAt: string
}

interface Formats {
	large: Large
	small: Small
	medium: Medium
	large_webp: LargeWebp
}

interface Large {
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

interface Small {
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

interface Medium {
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

interface LargeWebp {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata5
}

interface ProviderMetadata5 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata6 {
	public_id: string
	resource_type: string
}

interface IconMastercard {
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
	provider_metadata: ProviderMetadata11
	createdAt: string
	updatedAt: string
}

interface Formats2 {
	large: Large2
	small: Small2
	medium: Medium2
	large_webp: LargeWebp2
}

interface Large2 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata7
}

interface ProviderMetadata7 {
	public_id: string
	resource_type: string
}

interface Small2 {
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

interface Medium2 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata9
}

interface ProviderMetadata9 {
	public_id: string
	resource_type: string
}

interface LargeWebp2 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata10
}

interface ProviderMetadata10 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata11 {
	public_id: string
	resource_type: string
}

interface IconPrivatbank {
	data: Daum[]
}

interface Daum {
	id: number
	attributes: Attributes4
}

interface Attributes4 {
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
	provider_metadata: ProviderMetadata16
	createdAt: string
	updatedAt: string
}

interface Formats3 {
	large: Large3
	small: Small3
	medium: Medium3
	large_webp: LargeWebp3
}

interface Large3 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata12
}

interface ProviderMetadata12 {
	public_id: string
	resource_type: string
}

interface Small3 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata13
}

interface ProviderMetadata13 {
	public_id: string
	resource_type: string
}

interface Medium3 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata14
}

interface ProviderMetadata14 {
	public_id: string
	resource_type: string
}

interface LargeWebp3 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata15
}

interface ProviderMetadata15 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata16 {
	public_id: string
	resource_type: string
}

interface Delivery {
	id: number
	title: string
	text: string
	textNova: string
	textUkr: string
	textBottom: string
	icon: Icon2
	iconNova: IconNova
	iconUkr: IconUkr
}

interface Icon2 {
	data: Data4
}

interface Data4 {
	id: number
	attributes: Attributes5
}

interface Attributes5 {
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
	provider_metadata: ProviderMetadata17
	createdAt: string
	updatedAt: string
}

interface ProviderMetadata17 {
	public_id: string
	resource_type: string
}

interface IconNova {
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
	formats: Formats4
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata22
	createdAt: string
	updatedAt: string
}

interface Formats4 {
	large: Large4
	small: Small4
	medium: Medium4
	large_webp: LargeWebp4
}

interface Large4 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata18
}

interface ProviderMetadata18 {
	public_id: string
	resource_type: string
}

interface Small4 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata19
}

interface ProviderMetadata19 {
	public_id: string
	resource_type: string
}

interface Medium4 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata20
}

interface ProviderMetadata20 {
	public_id: string
	resource_type: string
}

interface LargeWebp4 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata21
}

interface ProviderMetadata21 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata22 {
	public_id: string
	resource_type: string
}

interface IconUkr {
	data: Data6
}

interface Data6 {
	id: number
	attributes: Attributes7
}

interface Attributes7 {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: Formats5
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata27
	createdAt: string
	updatedAt: string
}

interface Formats5 {
	large: Large5
	small: Small5
	medium: Medium5
	large_webp: LargeWebp5
}

interface Large5 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata23
}

interface ProviderMetadata23 {
	public_id: string
	resource_type: string
}

interface Small5 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata24
}

interface ProviderMetadata24 {
	public_id: string
	resource_type: string
}

interface Medium5 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata25
}

interface ProviderMetadata25 {
	public_id: string
	resource_type: string
}

interface LargeWebp5 {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: any
	size: number
	width: number
	height: number
	provider_metadata: ProviderMetadata26
}

interface ProviderMetadata26 {
	public_id: string
	resource_type: string
}

interface ProviderMetadata27 {
	public_id: string
	resource_type: string
}
