import { v4 } from 'uuid'
import { CategoriesType, ItemSelectType } from '../../models/models'
import type {
	FilterListType,
	IProduct,
	ProductInfoItemType,
} from './catalog.types'
import { isBooleanObject } from 'util/types'

export const processInitSetters = (
	type: string,
	products: IProduct[],
	infoSetters: Record<string, Set<ProductInfoItemType>>,
	filterList: FilterListType
) => {
	const processAddingSet = (keys: string[]) => {
		products?.forEach(product => {
			keys?.forEach(key => {
				infoSetters[key].add(product.attributes.info[0][key])
			})
		})
	}

	switch (type) {
		case 'batteries':
			processAddingSet(['capacity', 'voltage', 'type'])

			filterList.batteries.capacity = []
			filterList.batteries.voltage = []
			filterList.batteries.type = []

			Array.from(infoSetters.capacity).forEach(el => {
				filterList.batteries.capacity.push(createObject(String(el)))
			})
			Array.from(infoSetters.voltage).forEach(el => {
				filterList.batteries.voltage.push(createObject(String(el)))
			})
			Array.from(infoSetters.type).forEach(el => {
				filterList.batteries.type.push(createObject(String(el)))
			})

			break
		case 'powers':
			processAddingSet(['power', 'voltage', 'amperage'])

			filterList.powers.power = []
			filterList.powers.voltage = []
			filterList.powers.amperage = []

			Array.from(infoSetters.power).forEach(el => {
				filterList.powers.power.push(createObject(String(el)))
			})
			Array.from(infoSetters.voltage).forEach(el => {
				filterList.powers.voltage.push(createObject(String(el)))
			})
			Array.from(infoSetters.amperage).forEach(el => {
				filterList.powers.amperage.push(createObject(String(el)))
			})
			break
		case 'matrices':
			processAddingSet(['size', 'resolution', 'type'])

			filterList.matrices.size = []
			filterList.matrices.resolution = []
			filterList.matrices.type = []

			Array.from(infoSetters.size).forEach(el => {
				filterList.matrices.size.push(createObject(String(el)))
			})
			Array.from(infoSetters.resolution).forEach(el => {
				filterList.matrices.resolution.push(createObject(String(el)))
			})
			Array.from(infoSetters.type).forEach(el => {
				filterList.matrices.type.push(createObject(String(el)))
			})
			break
		case 'keyboards':
			processAddingSet(['backlight', 'lang'])

			filterList.keyboards.backlight = []
			filterList.keyboards.lang = []

			Array.from(infoSetters.backlight).forEach(el => {
				filterList.keyboards.backlight.push(createObject(String(el)))
			})
			Array.from(infoSetters.lang).forEach(el => {
				filterList.keyboards.lang.push(createObject(String(el)))
			})
			break
		case 'rams':
			processAddingSet(['memory', 'speed', 'type'])

			filterList.rams.memory = []
			filterList.rams.speed = []
			filterList.rams.type = []

			Array.from(infoSetters.memory).forEach(el => {
				filterList.rams.memory.push(createObject(String(el)))
			})
			Array.from(infoSetters.speed).forEach(el => {
				filterList.rams.speed.push(createObject(String(el)))
			})
			Array.from(infoSetters.type).forEach(el => {
				filterList.rams.type.push(createObject(String(el)))
			})
			break
		case 'storages':
			processAddingSet(['memory', 'form', 'type', 'interface'])

			filterList.storages.memory = []
			filterList.storages.form = []
			filterList.storages.type = []
			filterList.storages.interface = []

			Array.from(infoSetters.memory).forEach(el => {
				filterList.storages.memory.push(createObject(String(el)))
			})
			Array.from(infoSetters.form).forEach(el => {
				filterList.storages.form.push(createObject(String(el)))
			})
			Array.from(infoSetters.type).forEach(el => {
				filterList.storages.type.push(createObject(String(el)))
			})

			Array.from(infoSetters.interface).forEach(el => {
				filterList.storages.interface.push(createObject(String(el)))
			})
			break
		default:
			break
	}
}

function createObject(text: string): ItemSelectType {
	return {
		id: v4(),
		label: text,
		value: '',
		selected: false,
	}
}
