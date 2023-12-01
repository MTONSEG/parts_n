import { IProduct } from '../redux/catalog/catalog.types'

export const sortDownProducts = (arr: IProduct[]) => {
	return [
		...arr.sort((a, b) => {
			if (a.attributes && b.attributes) {
				if (
					a.attributes.price !== undefined &&
					b.attributes.price !== undefined
				) {
					if (a.attributes.price < b.attributes.price) return -1
					if (a.attributes.price > b.attributes.price) return 1
					return 0
				}
			}
			return 0 
		}),
	]
}


export const sortUpProducts = (arr: IProduct[]) => {
	return [
		...arr.sort((a, b) => {
			if (a.attributes && b.attributes) {
				if (
					a.attributes.price !== undefined &&
					b.attributes.price !== undefined
				) {
					if (a.attributes.price > b.attributes.price) return -1
					if (a.attributes.price < b.attributes.price) return 1
					return 0
				}
			}
			return 0
		}),
	]
}

export const sortDateProducts = (arr: IProduct[]) => {
	return [
		...arr.sort((a, b) => {
			if (a.attributes && b.attributes) {
				if (
					a.attributes.createdAt !== undefined &&
					b.attributes.createdAt !== undefined
				) {
					if (a.attributes.createdAt > b.attributes.createdAt) return -1
					if (a.attributes.createdAt < b.attributes.createdAt) return 1
					return 0
				}
			}
			return 0
		}),
	]
}