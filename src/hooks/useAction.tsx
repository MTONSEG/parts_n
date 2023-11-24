import { useMemo } from 'react'
import { useAppDispatch } from './useTypedRedux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { headerActions } from '../redux/header/header-slice'
import { footerActions } from '../redux/footer/footer-slice'
import { productActions } from '../redux/catalog/catalog.slice'

const rootActions = {
	...headerActions,
	...footerActions,
	...productActions,
}

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
