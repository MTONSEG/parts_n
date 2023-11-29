import { Suspense } from 'react'
import NavPanel from '../../common/NavPanel/NavPanel'
import ActionsProductCategory from './BodyCategory/ActionsProductCategory/ActionsProductCategory'
import './Category.scss'
import FilterCategory from './FilterCategory/FilterCategory'
import ProductsCategory from './BodyCategory/ProductsCategory/ProductsCategory'
import Loading from '../../ui/loaders/Loading'
import BodyCategory from './BodyCategory/BodyCategory'

type PropsType = {
	params: { category: string }
}

export default function Category({ params }: PropsType) {
	return (
		<>
			<NavPanel />
			<section className='category pt-[14px] md:pt-[38px] min-h-[calc(100vh_-_258px)] relative'>
				<div className='container'>
					<div className='category__row'>
						<FilterCategory category={params.category} />
						<BodyCategory category={params.category} />
					</div>
				</div>
			</section>
		</>
	)
}

