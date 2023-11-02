import './CartHeader.scss'
import CartSVG from '@/icons/cart.svg'

export function CartHeader() {
	return (
		<button className='cart-header'>
			<div className='cart-header__icon'>
				<CartSVG />
			</div>
			<p className='cart-header__text'>
				<span>Корзина</span>
				<span> 0 грн</span>
			</p>
		</button>
	)
}
