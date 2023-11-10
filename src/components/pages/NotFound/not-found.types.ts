export interface INoFoundData {
	title: string
	subtitle: string
	titleBtn: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	support: string
	text: string
	links: Link[]
}

interface Link {
	id: number
	title: string
	path: string
}
