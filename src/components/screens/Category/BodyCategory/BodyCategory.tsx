'use client'

import ActionsProductCategory from './ActionsProductCategory/ActionsProductCategory'
import ProductsCategory from './ProductsCategory/ProductsCategory'

export default function BodyCategory({ category }: { category: string }) {
	return (
		<div className='flex-grow'>
			<ActionsProductCategory />
			<ProductsCategory category={category} />
		</div>
	)
}
