'use client'

import Image from 'next/image'
import { IProduct } from '../../../../../redux/catalog/catalog.types'
import { Button } from '../../../../ui/buttons/Button/Button'
import InfoProductCategory from '../InfoProductCategory/InfoProductCategory'
import StatusProductCategory from '../StatusProductCategory/StatusProductCategory'
import './ProductCard.scss'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '../../../../../hooks/useTypedRedux'
import CartIcon from '@/icons/cart.svg'
import CheckIcon from '@/icons/check.svg'
import { useActions } from '../../../../../hooks/useAction'
import DelIcon from '@/icons/del.svg'

interface ProductPropsType {
	product: IProduct
	variant?: 'block' | 'grid'
	favorite?: boolean
}

export default function ProductCard({
	product,
	variant = 'grid',
	favorite,
}: ProductPropsType) {
	const router = useRouter()
	const favorites = useAppSelector(state => state.favorite.favorites)
	const cartList = useAppSelector(state => state.cart.cartList)
	const { addToCart, addToFavorite, removeFromFavorite } = useActions()

	const handleFavoriteClick = (id: string | number) => {
		if (favorites.some(el => el.id === product?.id)) {
			removeFromFavorite(id)
		} else {
			addToFavorite(product)
		}
	}

	const handleBuyClick = (id: string | number) => {
		addToCart({product, qty: 1})
	}

	return (
		<li
			className={`item-catalog item-catalog_${variant} ${
				favorite ? 'favorite' : ''
			}`}
			key={product.id}
			onClick={() => {
				router.push(`/product/${product.id}`)
			}}
		>
			{favorite ? (
				<button
					className='item-catalog__remove-favorite-btn'
					onClick={e => {
						removeFromFavorite(product.id)
						e.stopPropagation()
					}}
				>
					<DelIcon /> <span>Удалить</span>
				</button>
			) : (
				<></>
			)}

			<div className='item-catalog__body'>
				<div className='item-catalog__image-wrap'>
					<Image
						src={product.attributes.images.data[0].attributes.url}
						width={product.attributes.images.data[0].attributes.width}
						height={product.attributes.images.data[0].attributes.height}
						alt={product.attributes.model}
						className='item-catalog__image'
					/>
				</div>
				<div className='item-catalog__info-inner'>
					<h2 className='item-catalog__title'>
						<span>{product.attributes.title}</span>
					</h2>
					<div className='item-catalog__info'>
						<InfoProductCategory
							data={product.attributes.info[0]}
							variant={product.attributes.category.data.attributes.type}
						/>
						<StatusProductCategory
							quantity={product.attributes.quantity}
						/>
					</div>
				</div>
			</div>
			<div className='item-catalog__buy'>
				<p className='item-catalog__price'>
					{product.attributes.price} грн
				</p>
				<div className='item-catalog__buttons'>
					{!favorite ? (
						<Button
							variant='favorite'
							className={`item-catalog__favorite-btn ${
								favorites?.some(item => item.id === product.id)
									? 'selected'
									: ''
							}`}
							onClick={() => {
								handleFavoriteClick(product.id)
							}}
						/>
					) : (
						<></>
					)}

					{!cartList?.some(item => item.id === product.id) ? (
						<Button
							className={`item-catalog__cart-btn ${
								product.attributes.quantity < 1 ? 'disabled' : ''
							}`}
							onClick={() => {
								handleBuyClick(product.id)
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
	)
}
