import Link from 'next/link'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './FavoriteHeader.scss'
import FavoriteSVG from '@/icons/heart.svg'

export function FavoriteHeader() {
	const { favorites } = useAppSelector(state => state.favorite)
	
	return (
		<Link href={'/favorite'} className='favorite-header'>
			<div className='favorite-header__icon'>
				<FavoriteSVG />
			</div>
			<p className='favorite-header__text'>
				Избранное <span>({favorites.length})</span>
			</p>
		</Link>
	)
}
