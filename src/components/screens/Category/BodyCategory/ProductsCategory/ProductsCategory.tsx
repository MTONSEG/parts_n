import { useEffect, useState } from 'react'
import './ProductsCategory.scss'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../hooks/useTypedRedux'
import { getCatalogProducts } from '../../../../../redux/catalog/catalog.api'
import Loading from '../../../../ui/loaders/Loading'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../../../ui/buttons/Button/Button'
import InfoProductCategory from './InfoProductCategory/InfoProductCategory'
import StatusProductCategory from './StatusProductCategory/StatusProductCategory'
import CartIcon from '@/icons/cart.svg'
import CheckIcon from '@/icons/check.svg'
import { useActions } from '../../../../../hooks/useAction'

export default function ProductsCategory({ category }: { category: string }) {
	const [inCart, setInCart] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const { products, status, grid, ...state } = useAppSelector(
		state => state.product
	)
	useEffect((): void => {
		dispatch(getCatalogProducts(category))
	}, [dispatch])

	const handleFavoriteClick = () => {}

	const handleBuyClick = () => {}

	if (status === 'loading') return <Loading />
	if (status === 'error') return <h1>Ooops, this is error =)</h1>

	return (
		<>
			<ul
				className={`catalog ${grid ? 'catalog_grid' : ''} ${
					products?.length < 3 ? 'small' : ''
				}`}
			>
				{products?.map(el => (
					<li className='catalog__item item-catalog' key={el.id}>
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
									className='item-catalog__favorite-btn'
									onClick={handleFavoriteClick}
								/>
								{!inCart ? (
									<Button
										className='item-catalog__cart-btn'
										onClick={handleBuyClick}
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
