import Image from 'next/image'
import { IProduct } from '../../../../redux/catalog/catalog.types'
import './ItemCart.scss'
import Link from 'next/link'
import InfoProductCategory from '../../Category/BodyCategory/InfoProductCategory/InfoProductCategory'
import QuantityCounter from '../../../ui/forms/QuantityCounter/QuantityCounter'
import RemoveBtn from '../../../ui/buttons/RemoveBtn/RemoveBtn'
import { useEffect, useRef, useState } from 'react'
import { useActions } from '../../../../hooks/useAction'

export default function ItemCart({ product }: { product: IProduct }) {
	const { removeFromCart } = useActions()
	const [openInfo, setOpenInfo] = useState<boolean>(true)
	const [removePreview, setRemovePreview] = useState<boolean>(false)
	const [seconds, setSeconds] = useState<number>(5)
	const timer = useRef<NodeJS.Timeout | null>(null)
	const handleRemove = (id: string | number) => {
		setRemovePreview(true)
	}

	useEffect(() => {
		if (removePreview) {
			timer.current = setInterval(() => {
				setSeconds(s => {
					if (s < 1) {
						removeFromCart(product.id)
					}
					return s - 1
				})
			}, 1000)
		}

		return () => {
			if (timer.current) {
				clearInterval(timer.current)
			}
		}
	}, [removePreview])

	return (
		<>
			{!removePreview ? (
				<li className='item-cart'>
					<div className='item-cart__product-wrap'>
						<div className='item-cart__image-wrap'>
							<Image
								src={product.attributes.images.data[0].attributes.url}
								width={
									product.attributes.images.data[0].attributes.width
								}
								height={
									product.attributes.images.data[0].attributes.height
								}
								alt={product.attributes.model}
								className='item-cart__image'
							/>
						</div>
						<div className='item-cart__product-body'>
							<div className='item-cart__product-info'>
								<Link
									href={`/product/${product.id}`}
									className='item-cart__product-title'
								>
									<span>{product.attributes.title}</span>
								</Link>
								<p className='item-cart__text'>
									<span className='item-cart__text-title'>
										Модель:
									</span>
									<span className='item-cart__text-value'>
										{product.attributes.model}
									</span>
								</p>

								<p className='item-cart__text'>
									<span className='item-cart__text-title'>
										Артикул:
									</span>
									<span className='item-cart__text-value'>
										{product.attributes.code}
									</span>
								</p>
							</div>
							<div
								className={`item-cart__info ${openInfo ? 'open' : ''}`}
							>
								<h3
									className='item-cart__info-header'
									onClick={() => {
										setOpenInfo(!openInfo)
									}}
								>
									{openInfo
										? 'Cкрыть данные о товаре'
										: 'Показать данные о товаре'}
								</h3>
								<div className='item-cart__info-body'>
									<InfoProductCategory
										variant={
											product.attributes.category.data.attributes
												.type
										}
										data={product.attributes.info[0]}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='item-cart__buy-wrap'>
						<div className='item-cart__qty-wrap'>
							<QuantityCounter
								id={product.id}
								value={
									product.orderQuantity ? product.orderQuantity : 1
								}
							/>
						</div>
						<p className='item-cart__price'>
							{product.attributes.price} грн
						</p>
						<RemoveBtn
							className='item-cart__del-btn'
							id={product.id}
							title='Удалить'
							handleRemove={handleRemove}
						/>
					</div>
				</li>
			) : (
				<li className='remove-item-cart'>
					<div className='remove-item-cart__text'>
						<span>Товар удалён с корзины!</span>
						<button
							className='remove-item-cart__btn'
							aria-label='Restore product to cart list'
							onClick={() => {
								setRemovePreview(false)
								setSeconds(5)
							}}
						>
							Восстановить ?
						</button>
					</div>
					<div className='remove-item-cart__timer'>
						<Image
							src={'/icons/timer.svg'}
							width={22}
							height={22}
							alt='Timer'
							className='remove-item-cart__icon'
						/>
						<span>{seconds}c</span>
					</div>
				</li>
			)}
		</>
	)
}
