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

interface ProductPropsType {
	product: IProduct
	variant?: 'default' | 'favorite'
}

export default function ProductCard({
	product,
	variant = 'default',
}: ProductPropsType) {
	const router = useRouter()
	const favorites = useAppSelector(state => state.favorite.favorites)
	const cartList = useAppSelector(state => state.cart.cartList)
	const currentProducts = useAppSelector(
		state => state.product.currentProducts
	)
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
		<li
			className='catalog__item item-catalog'
			key={product.id}
			onClick={() => {
				router.push(`/product/${product.id}`)
			}}
		>
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
					{!cartList?.some(item => item.id === product.id) ? (
						<Button
							className='item-catalog__cart-btn'
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
