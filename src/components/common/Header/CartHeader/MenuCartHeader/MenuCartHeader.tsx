import Image from 'next/image'
import { useAppSelector } from '../../../../../hooks/useTypedRedux'
import './MenuCartHeader.scss'
import { Button } from '../../../../ui/buttons/Button/Button'
import { useEffect, useState } from 'react'

export default function MenuCartHeader() {
	const cartList = useAppSelector(state => state.cart.cartList)
	const [amountPrice, setAmountPrice] = useState<number | null>(null)

	useEffect(() => {
		let amount: number = 0

		cartList.forEach(el => {
			amount += Number(el.attributes.price)
		})

		setAmountPrice(amount)
	}, [cartList])

	return (
		<div className='menu-cart'>
			<div className='menu-cart__body'>
				{cartList?.length > 0 ? (
					<ul className='menu-cart__list'>
						{cartList?.map(el => (
							<li className='menu-cart__item' key={el.id}>
								<div className='menu-cart__image-wrap'>
									<Image
										src={el.attributes.images.data[0].attributes.url}
										width={
											el.attributes.images.data[0].attributes.width
										}
										height={
											el.attributes.images.data[0].attributes.height
										}
										alt={el.attributes.title}
										className='menu-cart__image'
									/>
								</div>
								<div className='menu-cart__item-body'>
									<h3 className='menu-cart__item-title'>
										<span>{el.attributes.title}</span>
									</h3>
									<p className='menu-cart__item-model'>
										<span className='menu-cart__item-text-tile'>
											Модель:
										</span>
										<span className='menu-cart__item-text-value'>
											{el.attributes.model}
										</span>
									</p>
									<p className='menu-cart__item-code'>
										<span className='menu-cart__item-text-tile'>
											Артикул:
										</span>
										<span className='menu-cart__item-text-value'>
											{el.attributes.code}
										</span>
									</p>
									<p className='menu-cart__item-price'>
										{el.attributes.price} грн
									</p>
								</div>
								<button className='menu-cart__del-btn'>
									<Image
										src={'/icons/del_cart-item.svg'}
										width={21}
										height={21}
										alt='Delete from cart'
									/>
								</button>
							</li>
						))}
					</ul>
				) : (
					<h3 className='menu-cart__text'>Нет товаров в корзине</h3>
				)}

				{amountPrice ? (
					<div className='menu-cart__bottom'>
						<p className='menu-cart__amount'>
							<span className='menu-cart__amount-text'>
								Всего к оплате:
							</span>
							<span className='menu-cart__amount-value'>
								{amountPrice} грн
							</span>
						</p>

						<div className='menu-cart__buttons'>
							<Button path='/cart' variant='underline'>В корзину</Button>
							<Button path='/order'>Оформить</Button>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className='menu-cart__triangle'></div>
		</div>
	)
}
