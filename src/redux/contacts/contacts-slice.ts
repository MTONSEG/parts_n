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
		value: '',
		placeholder: 'Введите имя',
		required: true,
	},
	inputEmail: {
		title: 'Ваш email ',
		value: '',
		placeholder: 'Введите имя',
		required: true,
	},
	inputTel: {
		title: 'Ваш номер телефона (необязательно)',
		value: '',
		placeholder: 'Введите имя',
		required: false,
	},
	inputComment: {
		title: 'Что вас интересует? ',
		value: '',
		placeholder: 'Напишите и мы свяжемся как можно быстрее',
		required: true,
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
