import { Metadata } from 'next'
import Delivery from '../../../components/screens/Delivery/Delivery'

export const metadata: Metadata = {
	title: 'Delivery and Payment | NOUT PARTS',
}

export default function DeliveryPage() {
	return <Delivery />
}
