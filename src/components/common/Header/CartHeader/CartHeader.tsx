'use client'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './CartHeader.scss'
import CartSVG from '@/icons/cart.svg'
import CloseSVG from '@/icons/close.svg'
import { poppins } from '../../../../fonts/fonts'
import MenuCartHeader from './MenuCartHeader/MenuCartHeader'
import { useActions } from '../../../../hooks/useAction'
import { EventHandler, useEffect, useRef } from 'react'

export function CartHeader() {
	const { cartList, openMenu } = useAppSelector(state => state.cart)
	const { toggleCartMenu } = useActions()

	return (
		<div className='relative'>
			<button
				className={`cart-header ${openMenu ? 'active' : ''}`}
				aria-label='Cart'
				onClick={() => {
					toggleCartMenu()
				}}
			>
				<div className='cart-header__icon'>
					{openMenu ? <CloseSVG /> : <CartSVG />}

					{cartList.length ? (
						<span className={`cart-header__qty ${poppins.variable}`}>
							{cartList.length}
						</span>
					) : (
						<></>
					)}
				</div>
				<p className='cart-header__text'>
					<span>Корзина</span>
					<span> 0 грн</span>
				</p>
			</button>
			<MenuCartHeader />
		</div>
	)
}
