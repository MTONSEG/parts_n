import Image from 'next/image'
import { Button } from '../../ui/buttons/Button/Button'
import './Cart.scss'
import cartImage from '@/images/cart-placeholder.png'

export default function EmptyCart() {
	return (
		<div className='empty-cart'>
			<div className='empty-cart__body'>
				<p className='empty-cart__text'>В вашей корзине пока нет товаров</p>
				<Button path='/catalog' variant='square' className='empty-cart__btn'>
					Перейти в каталог
				</Button>
			</div>

			<div className='empty-cart__image-wrap'>
				<Image
					src={cartImage}
					sizes='(max-width: 768px) 10vw'
					alt='Cart picture'
					priority
					className='empty-cart__image'
				/>
			</div>
		</div>
	)
}
