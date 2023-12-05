'use client'

import { Provider } from 'react-redux'
import store, { persistor } from '../../redux/store'
import type { ReactNode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

export function ReduxProvider({ children }: { children: ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				{children}
			</PersistGate>
		</Provider>
	)
}
