import { createSlice } from '@reduxjs/toolkit'
import { ILink } from '../../models/models'
import { v4 } from 'uuid'

interface FooterListType {
	title: string
	list: ILink[]
}

interface FooterContactsType {
	title: string
	addr: string
	tel: { title: string; value: ILink }
	workTime: { title: string; text: string; time: string }
	email: { title: string; value: ILink }
}

type FooterSliceType = {
	timeWork: string
	callback: string
	subTitle: string
	subText: string
	placeholder: string
	btnTitle: string
	copyright: string
	nav: FooterListType
	catalog: FooterListType
	contacts: FooterContactsType
}

const initialState: FooterSliceType = {
	subTitle: 'Подпишитесь, чтобы знать о скидках',
	subText: 'Узнавайте первыми о интересных предложениях',
	placeholder: 'Ваш E-mail',
	btnTitle: 'Подписаться',
	copyright: 'Copyright © 2021 Noutparts',
	timeWork: 'С 10:00 до 19:00 Без выходных',
	callback: 'Обратный звонок',
	nav: {
		title: 'Навигация',
		list: [
			{
				id: v4(),
				title: 'О  нас',
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
				title: 'Каталог',
				path: '/catalog',
			},
			{
				id: v4(),
				title: 'Контакты',
				path: '/contacts',
			},
		],
	},
	catalog: {
		title: 'Каталог',
		list: [
			{
				id: v4(),
				title: 'Матрицы',
				path: '#',
			},
			{
				id: v4(),
				title: 'Аккумуляторы',
				path: '#',
			},
			{
				id: v4(),
				title: 'Жесткие диски ',
				path: '#',
			},
			{
				id: v4(),
				title: 'Клавиатуры',
				path: '#',
			},
			{
				id: v4(),
				title: 'Оперативная память ',
				path: '#',
			},
			{
				id: v4(),
				title: 'Блок питания',
				path: '#',
			},
		],
	},
	contacts: {
		title: 'Контакты',
		addr: 'Aдрес: город, ул.,  д.',
		tel: {
			title: 'Телефон:  ',
			value: { title: '(066) 388-88 95', path: 'tel:0663888895' },
		},
		workTime: {
			title: 'Мы работаем ',
			text: 'Понедельник-Пятница: ',
			time: '10:00  - 19:00',
		},
		email: {
			title: 'E-mail: ',
			value: { title: 'shop@email.com', path: 'mailto:shop@email.com' },
		},
	},
}

const footerSlice = createSlice({
	name: 'footer',
	initialState,
	reducers: {},
})

export const { reducer: footerReducer, actions: footerActions } = footerSlice
