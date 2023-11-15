import './ListCategoryHome.scss'
import ItemListCategory from './ItemListCategory/ItemListCategory'
import type { CategoriesData } from '../home.types'

interface PropsType {
	state: CategoriesData[]
}

export default function ListCategoryHome({state}:PropsType) {
	return (
		<section className='list-category'>
			<div className='container'>
				<ul className='list-category__list'>
					{state?.map(el => (
						<ItemListCategory el={el} key={el.id}/>
					))}
				</ul>
			</div>
		</section>
	)
}


