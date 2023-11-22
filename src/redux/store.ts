import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contacts/contacts-slice'
import { headerReducer } from './header/header-slice'
import { footerReducer } from './footer/footer-slice'
import { productApi } from './product/product.api'

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		header: headerReducer,
		footer: footerReducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
