import Cart from '@/components/screens/Cart/Cart'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Cart NOUT PARTS',
	description: 'Cart',
}

export default function CartPage() {
	return <Cart />
}
