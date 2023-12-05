import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-slice';
import { headerReducer } from './header/header-slice';
import { footerReducer } from './footer/footer-slice';
import { productReducer } from './catalog/catalog.slice';
import { cartReducer } from './cart/cart.slice';

export const rootReducer = combineReducers({
	contacts: contactsReducer,
	header: headerReducer,
	footer: footerReducer,
	product: productReducer,
	cart: cartReducer
})
