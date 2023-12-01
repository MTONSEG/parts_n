import { v4 as uuidv4 } from 'uuid'
import { CategoriesType, ItemSelectType } from '../../models/models'
import type {
	FilterListType,
	IProduct,
	ProductInfoItemType,
} from './catalog.types'

export const processInitSetters = (
	type: string,
	products: IProduct[] | undefined,
	infoSetters: Record<string, Set<ProductInfoItemType>>,
	filterList: FilterListType
) => {
	const qtyItems: Record<string, Record<string, number>> = {}

	const processAddingSet = (keys: string[]) => {
		const result: Record<string, any> = {}

		products?.forEach(product => {
			keys?.forEach(key => {
				const value = product.attributes.info[0][key]
				infoSetters[key].add(value)

				result[String(value)] = result[String(value)]
					? result[String(value)] + 1
					: 1

				if (!qtyItems[key]) {
					qtyItems[key] = {}
				}

				qtyItems[key][String(value)] = qtyItems[key][String(value)]
					? qtyItems[key][String(value)] + 1
					: 1
			})
		})
	}

	console.log(qtyItems)

	const processFilterList = (
		category: keyof FilterListType,
		keys: string[]
	) => {
		keys.forEach(key => {
			filterList[category][key] = Array.from(infoSetters[key]).map(el => {
				let qty: number = qtyItems[key][String(el)]
				return createObject(String(el), qty)
			})
		})
	}

	switch (type) {
		case 'batteries':
			processAddingSet(['capacity', 'voltage', 'type'])
			processFilterList('batteries', ['capacity', 'voltage', 'type'])
			break

		case 'powers':
			processAddingSet(['power', 'voltage', 'amperage'])
			processFilterList('powers', ['power', 'voltage', 'amperage'])
			break

		case 'matrices':
			processAddingSet(['size', 'resolution', 'type'])
			processFilterList('matrices', ['size', 'resolution', 'type'])
			break

		case 'keyboards':
			processAddingSet(['backlight', 'lang'])
			processFilterList('keyboards', ['backlight', 'lang'])
			break

		case 'rams':
			processAddingSet(['memory', 'speed', 'type'])
			processFilterList('rams', ['memory', 'speed', 'type'])
			break

		case 'storages':
			processAddingSet(['memory', 'form', 'type', 'interface'])
			processFilterList('storages', ['memory', 'form', 'type', 'interface'])
			break

		default:
			break
	}
}

function createObject(text: string, qty: number): ItemSelectType {
	return {
		id: uuidv4(),
		label: text,
		value: '',
		selected: false,
		qty,
	}
}
