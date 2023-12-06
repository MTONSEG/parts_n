import { useMemo } from 'react'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './OrderCart.scss'
export default function OrderCart() {
	const { cartList } = useAppSelector(state => state.cart)

	const totalPrice = useMemo(() => {
		let amount: number = 0

		cartList.forEach(el => {
			amount += Number(el.attributes.price) * Number(el.orderQuantity)
		})

		return amount
	}, [cartList])

	return (
		<div className={`order-cart`}>
			<h2 className='order-cart__title'>Оформление заказа</h2>
			<p className={`order-cart__subtitle`}>Итого</p>
			<ul className='order-cart__list'>
				{cartList.map((el, index) => (
					<li className='order-cart__item' key={el.id}>
						<p className='order-cart__name'>
							<span>{`${index + 1}. ${el.attributes.title}`}</span>
						</p>
						<div className='order-cart__item-line'></div>
						<p className='order-cart__price'>
							{(
								Number(el.attributes.price) * Number(el.orderQuantity)
							).toFixed() + ' грн'}
						</p>
					</li>
				))}
			</ul>
			<p className='order-cart__total-price'>
				<span>Итоговая цена</span>
				<span>{totalPrice.toFixed()}</span>
			</p>
		</div>
	)
}
