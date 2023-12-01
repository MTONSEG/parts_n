import { SaleSort } from '../redux/catalog/catalog.types'

export type NumStr = string | number

export interface ILink {
	id?: number | string
	title: string
	path: string
}

export type ButtonTypes = 'button' | 'submit'

export type StatusType = 'init' | 'loading' | 'success' | 'error'

export interface IInput {
	id?: NumStr
	title?: string
	required?: boolean
	value?: string
	placeholder?: string
	subtext?: string
	type?: string
	requiredMess?: string
	pattern?: RegExp
}

export type CategoriesType =
	| 'batteries'
	| 'powers'
	| 'matrices'
	| 'keyboards'
	| 'rams'
	| 'storages'

export interface ItemSelectType {
	id?: string | number 
	label: string | number
	value: string
	selected?: boolean
	unit?: string
	qty?: number
}

export interface SortItemType {
	id?: string | number
	label: string
	value: SaleSort
	selected?: boolean
}
