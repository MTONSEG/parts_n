'use client'

import './BodyCategory.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedRedux'
import ActionsProductCategory from './ActionsProductCategory/ActionsProductCategory'
import { getCatalogProducts } from '../../../../redux/catalog/catalog.api'
import Loading from '../../../ui/loaders/Loading'
import ProductCard from './ProductCard/ProductCard'

export default function BodyCategory({ category }: { category: string }) {
	const dispatch = useAppDispatch()
	const { products, currentProducts, brands, status, grid } = useAppSelector(
		state => state.product
	)

	useEffect(() => {
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
			<ul
				className={`catalog ${grid ? 'catalog_grid' : ''} ${
					currentProducts?.length < 3 ? 'small' : ''
				}`}
			>
				{currentProducts?.map(el => (
					<ProductCard key={el.id} product={el} />
				))}
			</ul>
		</div>
	)
}
