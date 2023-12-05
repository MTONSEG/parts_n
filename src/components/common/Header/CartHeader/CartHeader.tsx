'use client'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './CartHeader.scss'
import CartSVG from '@/icons/cart.svg'
import { poppins } from '../../../../fonts/fonts'
import MenuCartHeader from './MenuCartHeader/MenuCartHeader'

export function CartHeader() {
	const { cartList, open } = useAppSelector(state => state.cart)

	return (
		<button className='cart-header' aria-label='Cart'>
			<div className='cart-header__icon'>
				<CartSVG />
				{cartList.length ? (
					<span className={`cart-header__qty ${poppins.variable}`}>
						{cartList.length}
					</span>
				) : (
					<></>
				)}
				{/* {cartList?.length && (
					<span className={`cart-header__qty ${poppins.variable}`}>
						{cartList.length}
					</span>
				)} */}
				<MenuCartHeader/>
			</div>
			<p className='cart-header__text'>
				<span>Корзина</span>
				<span> 0 грн</span>
			</p>
		</button>
	)
}
