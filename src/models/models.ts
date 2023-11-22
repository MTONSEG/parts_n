export type NumStr = string | number

export interface ILink {
	id?: number | string
	title: string
	path: string
}

export type ButtonTypes = 'button' | 'submit';

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
	| 'matrices'
	| 'storages'
	| 'batteries'
	| 'keyboards'
	| 'rams'
	| 'powers'
	| undefined