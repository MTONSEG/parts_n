import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IInput, StatusType } from '../../models/models'

type ContactsStateType = {
	status: StatusType
	inputName: IInput
	inputEmail: IInput
	inputTel: IInput
	inputComment: IInput
}

const initialState: ContactsStateType = {
	status: 'init',
	inputName: {
		title: 'Ваше имя',
		placeholder: 'Введите имя',
		required: true,
		requiredMess: 'Поле обязательно к заполнению',
	},
	inputEmail: {
		title: 'Ваш email ',
		placeholder: 'Введите ваш Email',
		required: true,
		requiredMess: 'Поле обязательно к заполнению',
		pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
	},
	inputTel: {
		title: 'Ваш номер телефона (необязательно)',
		placeholder: 'Введите номер телефона',
		required: false,
		requiredMess: 'Поле обязательно к заполнению',
	},
	inputComment: {
		title: 'Что вас интересует? ',
		placeholder: 'Напишите и мы свяжемся как можно быстрее',
		required: true,
		requiredMess: 'Поле обязательно к заполнению',
	},
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setNameValue(state, actions: PayloadAction<{ value: string }>) {
			state.inputName.value = actions.payload.value
			console.log(actions.payload.value)
		},
	},
})

export const { reducer: contactsReducer, actions: contactsActions } =
	contactsSlice
