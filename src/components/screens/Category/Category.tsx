import NavPanel from '../../common/NavPanel/NavPanel'
import './Category.scss'
import FilterCategory from './FilterCategory/FilterCategory'
import ProductsCategory from './ProductsCategory/ProductsCategory'

type PropsType = {
	params: { category: string }
}

export default function Category({ params }: PropsType) {
	return (
		<>
			<NavPanel />
			<section className='category pt-[14px] md:pt-[38px]'>
				<div className='container'>
					<div className='category__row flex items-start'>
						<FilterCategory />
						<ProductsCategory params={params} />
					</div>
				</div>
			</section>
		</>
	)
}
