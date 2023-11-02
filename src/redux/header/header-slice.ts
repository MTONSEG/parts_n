import { createSlice } from '@reduxjs/toolkit'
import { ILink } from '../../models/models'
import { v4 } from 'uuid'
import { ABOUT_PATH, CONTACTS_PATH, DELIVERY_PATH, WARRANTY_PATH } from '../../routes/routes'

type HeaderStateType = {
	staticLinks: ILink[],
	callbackBtn: {
		tel: string,
		text: string
	}
}

const initialState: HeaderStateType = {
	staticLinks: [
		{
			id: v4(),
			title: 'О нас',
			path: ABOUT_PATH,
		},
		{
			id: v4(),
			title: 'Доставка и оплата',
			path: DELIVERY_PATH,
		},
		{
			id: v4(),
			title: 'Гарантии',
			path: WARRANTY_PATH,
		},
		{
			id: v4(),
			title: 'Контакты',
			path: CONTACTS_PATH,
		},
	],
	callbackBtn: {
		tel: '(066) 388-88 95',
		text: 'Обратный звонок',
	},
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {},
})

export const { reducer: headerReducer } = headerSlice
