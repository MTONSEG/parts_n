import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contacts/contacts-slice'
import { headerReducer } from './header/header-slice'
import { footerReducer } from './footer/footer-slice'

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		header: headerReducer,
		footer: footerReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
