export type NumStr = string | number


export interface ILink {
	id?: number | string
	title: string
	path: string
}

export type StatusType = 'init' | 'loading' | 'success' | 'error';

export interface IInput {
	id?: NumStr
	title?: string
	required?: boolean
	value: string
	placeholder?: string
	subtext?: string
	type?: string
}