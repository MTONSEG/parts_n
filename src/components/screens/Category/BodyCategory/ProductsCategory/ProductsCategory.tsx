'use client'
import { useEffect, useState } from 'react'
import './ProductsCategory.scss'
import { useAppSelector } from '../../../../../hooks/useTypedRedux'
import Image from 'next/image'
import { Button } from '../../../../ui/buttons/Button/Button'
import InfoProductCategory from './InfoProductCategory/InfoProductCategory'
import StatusProductCategory from './StatusProductCategory/StatusProductCategory'
import CartIcon from '@/icons/cart.svg'
import CheckIcon from '@/icons/check.svg'
import { useRouter } from 'next/navigation'
import { useActions } from '../../../../../hooks/useAction'
import { IProduct } from '../../../../../redux/catalog/catalog.types'

export default function ProductsCategory({ category }: { category: string }) {
	const router = useRouter()
	const { currentProducts, grid } = useAppSelector(state => state.product)
	const cartList = useAppSelector(state => state.cart.cartList)
	const favorites = useAppSelector(state => state.favorite.favorites)
	const { addToCart, addToFavorite, removeFromFavorite } = useActions()

	const handleFavoriteClick = (id: string | number) => {
		const product: IProduct | undefined = currentProducts.find(
			el => el.id === id
		)

		if (favorites.some(el => el.id === product?.id)) {
			product && removeFromFavorite(id)
		} else {
			product && addToFavorite(product)
		}
	}

	const handleBuyClick = (id: string | number) => {
		const product: IProduct | undefined = currentProducts.find(
			el => el.id === id
		)
		product && addToCart(product)
	}

	return (
		<>
			<ul
				className={`catalog ${grid ? 'catalog_grid' : ''} ${
					currentProducts?.length < 3 ? 'small' : ''
				}`}
			>
				{currentProducts?.map(el => (
					<li
						className='catalog__item item-catalog'
						key={el.id}
						onClick={() => {
							router.push(`/catalog/${category}/${el.id}`)
						}}
					>
						<div className='item-catalog__body'>
							<div className='item-catalog__image-wrap'>
								<Image
									src={el.attributes.images.data[0].attributes.url}
									width={el.attributes.images.data[0].attributes.width}
									height={
										el.attributes.images.data[0].attributes.height
									}
									alt={el.attributes.model}
									className='item-catalog__image'
								/>
							</div>
							<div className='item-catalog__info-inner'>
								<h2 className='item-catalog__title'>
									<span>{el.attributes.title}</span>
								</h2>
								<div className='item-catalog__info'>
									<InfoProductCategory
										data={el.attributes.info[0]}
										variant={category}
									/>
									<StatusProductCategory
										quantity={el.attributes.quantity}
									/>
								</div>
							</div>
						</div>
						<div className='item-catalog__buy'>
							<p className='item-catalog__price'>
								{el.attributes.price} грн
							</p>
							<div className='item-catalog__buttons'>
								<Button
									variant='favorite'
									className={`item-catalog__favorite-btn ${
										favorites?.some(item => item.id === el.id)
											? 'selected'
											: ''
									}`}
									onClick={() => {
										handleFavoriteClick(el.id)
									}}
								/>
								{!cartList?.some(item => item.id === el.id) ? (
									<Button
										className='item-catalog__cart-btn'
										onClick={() => {
											handleBuyClick(el.id)
										}}
									>
										Купить <CartIcon />
									</Button>
								) : (
									<Button
										variant='cart'
										className='item-catalog__cart-btn'
										path='/cart'
									>
										В корзине <CheckIcon />
									</Button>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}
