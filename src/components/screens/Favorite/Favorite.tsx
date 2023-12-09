'use client'

import Image from 'next/image'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import type { ILink } from '../../../models/models'
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs'
import { Title } from '../../ui/atoms/Title/Title'
import ProductCard from '../Category/BodyCategory/ProductCard/ProductCard'
import './Favorite.scss'
import ImageFavorite from '@/icons/favorites.png'

const breadcrumbs: ILink[] = [
	{
		title: 'Избранное',
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
				{favorites.length ? (
					<ul className='favorites__list'>
						{favorites?.map(el => (
							<ProductCard
								key={el.id}
								product={el}
								variant='grid'
								favorite
							/>
						))}
					</ul>
				) : (
					<div className='favorites__image-wrap'>
							<Image src={ImageFavorite} alt='Empty favorites' className='favorites__image' />
							<span>Пусто</span>
					</div>
				)}
			</div>
		</section>
	)
}
