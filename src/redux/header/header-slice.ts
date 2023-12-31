import { createSlice } from '@reduxjs/toolkit'
import { ILink } from '../../models/models'
import { v4 } from 'uuid'

type HeaderStateType = {
	activeMenu: boolean
	activeCatalog: boolean
	staticLinks: ILink[]
	callbackBtn: {
		tel: string
		hrefTel: string
		time: string
		text: string
	}
}

const initialState: HeaderStateType = {
	activeMenu: false,
	activeCatalog: false,
	staticLinks: [
		{
			id: v4(),
			title: 'О нас',
			path: '/about',
		},
		{
			id: v4(),
			title: 'Доставка и оплата',
			path: '/delivery',
		},
		{
			id: v4(),
			title: 'Гарантии',
			path: '/warranty',
		},
		{
			id: v4(),
			title: 'Контакты',
			path: '/contacts',
		},
	],
	callbackBtn: {
		tel: '(066) 388-88 95',
		hrefTel: '380663888895',
		time: 'С 9:00 до 18:00 Без выходных',
		text: 'Обратный звонок',
	},
}

const headerSlice = createSlice({
	name: 'headerSlice',
	initialState,
	reducers: {
		enableMenu(state) {
			state.activeMenu = true
		},
		disableMenu(state) {
			state.activeMenu = false
		},
		enableCatalog(state) {
			state.activeCatalog = true
		},
		disableCatalog(state) {
			state.activeCatalog = false
		},
		toggleCatalog(state) {
			state.activeCatalog = !state.activeCatalog
		},
	},
})

export const { reducer: headerReducer, actions: headerActions } = headerSlice
