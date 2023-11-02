import './FavoriteHeader.scss'
import FavoriteSVG from '@/icons/heart.svg'

export function FavoriteHeader() {
	return (
		<button className='favorite-header'>
			<div className='favorite-header__icon'>
				<FavoriteSVG />
			</div>
			<p className='favorite-header__text'>
				Избранное <span>(0)</span>
			</p>
		</button>
	)
}
