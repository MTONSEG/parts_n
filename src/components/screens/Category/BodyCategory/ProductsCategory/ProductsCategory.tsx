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

export default function ProductsCategory({ category }: { category: string }) {
	const router = useRouter()
	const [inCart] = useState<boolean>(false)
	const { currentProducts, grid, ...state } = useAppSelector(
		state => state.product
	)
	useEffect((): void => {}, [])

	const handleFavoriteClick = () => {}

	const handleBuyClick = () => {}


	return (
		<>
			<ul
				className={`catalog ${grid ? 'catalog_grid' : ''} ${
					currentProducts?.length < 3 ? 'small' : ''
				}`}
			>
				{currentProducts?.map(el => (
					<li className='catalog__item item-catalog' key={el.id} onClick={()=>{router.push(`/catalog/${category}/${el.id}`)}}>
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
