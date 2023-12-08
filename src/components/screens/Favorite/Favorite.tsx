import { useAppSelector } from '../../../hooks/useTypedRedux'
import type { ILink } from '../../../models/models'
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs'
import { Title } from '../../ui/atoms/Title/Title'
import ProductCard from '../Category/BodyCategory/ProductCard/ProductCard'
import './Favorite.scss'

const breadcrumbs: ILink[] = [
	{
		title: 'Доставка и оплата',
		path: '#',
	},
]

export default function Favorite() {
	const { favorites } = useAppSelector(state => state.favorite)

	return (
		<section className='favorites'>
			<Breadcrumbs links={breadcrumbs} />
			<div className='container'>
				<Title className='favorites__title'>Список избранного</Title>
				<ul className='favorites__list'>
					{/* {favorites?.map(el => <ProductCard key={el.id} product={el} />)} */}
				</ul>
			</div>
		</section>
	)
}
