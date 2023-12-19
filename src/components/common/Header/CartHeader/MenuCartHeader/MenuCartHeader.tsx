import Image from 'next/image'
import { useAppSelector } from '../../../../../hooks/useTypedRedux'
import './MenuCartHeader.scss'
import { Button } from '../../../../ui/buttons/Button/Button'
import { useEffect, useMemo, useRef } from 'react'
import { useActions } from '../../../../../hooks/useAction'
import { useRouter } from 'next/navigation'
import RemoveBtn from '../../../../ui/buttons/RemoveBtn/RemoveBtn'

export default function MenuCartHeader() {
	const { cartList, openMenu } = useAppSelector(state => state.cart)
	const { removeFromCart, toggleCartMenu } = useActions()
	const router = useRouter()
	const refMenu = useRef<HTMLDivElement>(null)

	const amountPrice = useMemo<number>(() => {
		let amount: number = 0

		cartList.forEach(el => {
			amount += Number(el.attributes.price)
		})

		return amount
	}, [cartList])

	useEffect(() => {
		function handleOutClick(e: MouseEvent) {
			if (openMenu && !refMenu.current?.contains(e.target as Node)) {
				toggleCartMenu()
			}
		}

		document.addEventListener('click', handleOutClick)
		return () => {
			document.removeEventListener('click', handleOutClick)
		}
	}, [openMenu, toggleCartMenu])

	const handleClickTitle = (id: string | number): void => {
		router.push(`/product/${id}`)
	}


	console.log(cartList);
	
	return (
		<div ref={refMenu} className={`menu-cart ${openMenu ? 'open' : ''}`}>
			<div className='menu-cart__body'>
				{cartList?.length > 0 ? (
					<ul className='menu-cart__list'>
						{cartList?.map(el => (
							<li
								className='menu-cart__item'
								key={el.id}
								onClick={() => {
									handleClickTitle(el.id)
								}}
							>
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
								<RemoveBtn className='menu-cart__del-btn' id={el.id} />
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
							<Button
								path='/cart'
								variant='underline'
								onClick={() => {
									toggleCartMenu()
								}}
							>
								В корзину
							</Button>
							<Button
								path='/order'
								onClick={() => {
									toggleCartMenu()
								}}
							>
								Оформить
							</Button>
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
