'use client'

import { Provider } from 'react-redux'
import store, { persistor } from './store'
import type { ReactNode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from '../components/ui/loaders/Loading'
// import { store } from './store'

export function ReduxProvider({ children }: { children: ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				{children}
			</PersistGate>
		</Provider>
	)
}
