import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { headerActions } from '../redux/header/header-slice'
import { footerActions } from '../redux/footer/footer-slice'
import { productActions } from '../redux/catalog/catalog.slice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
