import { API } from '../../../../api'
import './ListCategoryHome.scss'
import { CategoryHomeData } from './list-catalog.types'

const getData = async (): Promise<CategoryHomeData[]> => {
	const res = await fetch(`${API}/categories?populate=*`, {
		cache: 'no-cache',
	})

	const data = await res.json()

	return data.data
}

export default async function ListCategoryHome() {
	const state = await getData()
	console.log(state)

	return (
		<section className='list-category'>
			<div className='container'>
				<ul className='list-category__list'>
					{state.map(el => (
						<li
							className={`list-category__item list-category__item_${el.attributes.type}`}
							style={{ backgroundColor: el.attributes.color}}
							key={el.id}
						>
							{el.attributes.title}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
