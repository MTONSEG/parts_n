export interface Root {
	data: Data;
	meta: Meta;
}

export interface Data {
	id: number;
	attributes: Attributes;
}

export interface Attributes {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	title: string;
	color: string;
	model: string;
	code: string;
	price: number;
	inStock: boolean;
	quantity: number;
	category: Category;
	info: Info[];
	images: Images;
	device: Device;
}

export interface Category {
	data: Data2;
}

export interface Data2 {
	id: number;
	attributes: Attributes2;
}

export interface Attributes2 {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	title: string;
	color: string;
	titleBtn: string;
	type: string;
	subtitle: any;
	path: any;
}

export interface Info {
	id: number;
	__component: string;
	power: number;
	voltage: number;
	amperage: number;
}

export interface Images {
	data: Daum[];
}

export interface Daum {
	id: number;
	attributes: Attributes3;
}

export interface Attributes3 {
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: ProviderMetadata2;
	createdAt: string;
	updatedAt: string;
}

export interface Formats {
	thumbnail: Thumbnail;
}

export interface Thumbnail {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
	provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
	public_id: string;
	resource_type: string;
}

export interface ProviderMetadata2 {
	public_id: string;
	resource_type: string;
}

export interface Device {
	data: Data3;
}

export interface Data3 {
	id: number;
	attributes: Attributes4;
}

export interface Attributes4 {
	model: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	series: string;
}

export interface Meta {}
