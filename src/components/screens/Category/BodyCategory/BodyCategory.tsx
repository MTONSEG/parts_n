'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedRedux'
import ActionsProductCategory from './ActionsProductCategory/ActionsProductCategory'
import ProductsCategory from './ProductsCategory/ProductsCategory'
import {
	getCatalogProducts,
	getDevices,
} from '../../../../redux/catalog/catalog.api'
import Loading from '../../../ui/loaders/Loading'

export default function BodyCategory({ category }: { category: string }) {
	const dispatch = useAppDispatch()
	const { products, brands, status } = useAppSelector(state => state.product)

	useEffect(() => {
		if (!brands.options.length) {
			dispatch(getDevices())
		}
		dispatch(getCatalogProducts(category))
	}, [brands.options.length, category, dispatch])
	
	if (status === 'loading') return <Loading />
	if (status === 'error') return <h1>Ooops, failed to fetching data (</h1>

	return (
		<div className='flex-grow'>
			<h1 className='text-[16px] md:text-[24px] font-medium leading-[1.08] mb-[16px] md:mb-[11px]'>
				{products[0]?.attributes.category.data.attributes.title}
			</h1>
			<ActionsProductCategory />
			<ProductsCategory category={category} />
		</div>
	)
}
