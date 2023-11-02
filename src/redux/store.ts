import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contacts/contacts-slice'
import { headerReducer } from './header/header-slice'

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		header: headerReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
