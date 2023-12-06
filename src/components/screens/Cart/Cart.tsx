'use client'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import { ILink } from '../../../models/models'
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs'
import { Title } from '../../ui/atoms/Title/Title'
import { Button } from '../../ui/buttons/Button/Button'
import './Cart.scss'
import ItemCart from './ItemCart/ItemCart'
import OrderCart from './OrderCart/OrderCart'

export default function Cart() {
	const breadcrumbs: ILink[] = [
		{
			title: 'Корзина',
			path: '#',
		},
	]

	const { cartList } = useAppSelector(state => state.cart)

	return (
		<div className='cart'>
			<Breadcrumbs links={breadcrumbs} />
			<div className='container'>
				<Title className='cart__title'>Корзина</Title>
				<div className='cart__row'>
					<div className='cart__table'>
						<div className='cart__table-header'>
							<span className='cart__table-title cart__table-title_product'>Товар</span>
							<span className='cart__table-title cart__table-title_qty'>Кол-во</span>
							<span className='cart__table-title cart__table-title_price'>Цена</span>
						</div>
						<ul className='cart__table-list'>
							{cartList?.map(product => (
								<ItemCart product={product} key={product.id} />
							))}
						</ul>
					</div>

					<OrderCart />

					<div className='cart__button-wrap'>
						<Button path='/catalog' variant='white' className='cart__btn'>
							Продолжить покупки
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
