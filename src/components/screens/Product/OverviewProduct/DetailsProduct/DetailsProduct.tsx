'use client';

import { useAppSelector } from '../../../../../hooks/useTypedRedux';
import type { IProduct } from '../../../../../redux/catalog/catalog.types';
import { Button } from '../../../../ui/buttons/Button/Button';
import QuantityCounter from '../../../../ui/forms/QuantityCounter/QuantityCounter';
import InfoProductCategory from '../../../Category/BodyCategory/InfoProductCategory/InfoProductCategory';
import CartIcon from '@/icons/cart.svg';
import CheckIcon from '@/icons/check.svg';
import './DetailsProduct.scss';
import { useActions } from '../../../../../hooks/useAction';
import { useMemo, useState } from 'react';

type PropsType = {
	product: IProduct;
};

export default function DetailsProduct({ product }: PropsType) {
	const favorites = useAppSelector(state => state.favorite.favorites);
	const cartList = useAppSelector(state => state.cart.cartList);
	const [quantity, setQuantity] = useState<number>(1);
	const { addToCart, addToFavorite, removeFromFavorite, incrementQuantity, decrementQuantity } =
		useActions();

	const productQuantity: number = useMemo(() => {
		const findProduct: IProduct | undefined = cartList.find(el => el.id === product.id);

		if (findProduct && findProduct.orderQuantity) {
			setQuantity(findProduct.orderQuantity);

			return findProduct.orderQuantity;
		}

		return quantity;
	}, [cartList, product.id, quantity]);

	const handleFavoriteClick = (id: string | number) => {
		if (favorites.some(el => el.id === product?.id)) {
			removeFromFavorite(id);
		} else {
			addToFavorite(product);
		}
	};

	const handleBuyClick = (id: string | number) => {
		addToCart({ product, qty: quantity });
	};

	const handleDecrement = (): void => {
		if (cartList?.some(item => item.id === product.id)) {
			decrementQuantity(product.id);
		} else {
			setQuantity(quantity => (quantity > 1 ? --quantity : 1));
		}
	};

	const handleIncrement = (): void => {
		if (cartList?.some(item => item.id === product.id)) {
			incrementQuantity(product.id);
		} else {
			setQuantity(quantity => ++quantity);
		}
	};

	return (
		<div className='detail-product'>
			<div className='detail-product__info'>
				<InfoProductCategory
					data={product.attributes.info[0]}
					variant={product.attributes.category.data.attributes.type}
				/>
			</div>
			<div className='detail-product__qty-price-btn'>
				<div className='detail-product__price-wrap'>
					<p className='detail-product__price'>{product.attributes.price}</p>
					<QuantityCounter
						value={productQuantity}
						incrementHandler={handleIncrement}
						decrementHandler={handleDecrement}
					/>
				</div>

				{!cartList?.some(item => item.id === product.id) ? (
					<Button
						className={`item-catalog__cart-btn ${
							product.attributes.quantity < 1 ? 'disabled' : ''
						}`}
						onClick={() => {
							handleBuyClick(product.id);
						}}
					>
						Купить <CartIcon />
					</Button>
				) : (
					<Button variant='cart' className='item-catalog__cart-btn' path='/cart'>
						В корзине <CheckIcon />
					</Button>
				)}
			</div>
			<div className='detail-product__favorite'>
				{favorites?.some(item => item.id === product.id) ? (
					<Button
						variant='favorite'
						className={`item-catalog__favorite-btn selected`}
						onClick={() => {
							handleFavoriteClick(product.id);
						}}
					>
						В избранном
					</Button>
				) : (
					<Button
						variant='favorite'
						className={`item-catalog__favorite-btn`}
						onClick={() => {
							handleFavoriteClick(product.id);
						}}
					>
						В избранное
					</Button>
				)}
			</div>
			<div className='detail-product__form'></div>
		</div>
	);
}
