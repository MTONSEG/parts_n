'use client'

import { useAppSelector } from '../../../../hooks/useTypedRedux'
import ActionsProductCategory from './ActionsProductCategory/ActionsProductCategory'
import ProductsCategory from './ProductsCategory/ProductsCategory'

export default function BodyCategory({ category }: { category: string }) {
	const { products } = useAppSelector(state => state.product)

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
