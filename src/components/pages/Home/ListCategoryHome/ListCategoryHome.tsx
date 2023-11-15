import Image from 'next/image'
import { API } from '../../../../api'
import './ListCategoryHome.scss'
import type { CategoryHomeData } from './list-catalog.types'
import ItemListCategory from './ItemListCategory/ItemListCategory'

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
					{state?.map(el => (
						<ItemListCategory el={el} key={el.id}/>
					))}
				</ul>
			</div>
		</section>
	)
}


