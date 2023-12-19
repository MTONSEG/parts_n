'use client'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './CartHeader.scss'
import CartSVG from '@/icons/cart.svg'
import CloseSVG from '@/icons/close.svg'
import { poppins } from '../../../../fonts/fonts'
import MenuCartHeader from './MenuCartHeader/MenuCartHeader'
import { useActions } from '../../../../hooks/useAction'
import { EventHandler, useEffect, useMemo, useRef } from 'react'

export function CartHeader() {
	const { cartList, openMenu } = useAppSelector(state => state.cart)
	const { toggleCartMenu } = useActions()

	const amountPrice = useMemo<number>(() => {
		let amount: number = 0

		cartList?.forEach(el => {
			amount += Number(el.attributes?.price)
		})

		return amount
	}, [cartList])

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
					<span> {amountPrice} грн</span>
				</p>
			</button>
			<MenuCartHeader />
		</div>
	)
}
