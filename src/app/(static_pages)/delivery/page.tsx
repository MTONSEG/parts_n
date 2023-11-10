import { Metadata } from 'next'
import Delivery from '../../../components/pages/Delivery/Delivery'

export const metadata: Metadata = {
	title: 'Delivery and Payment | NOUT PARTS',
}

export default function DeliveryPage() {
	return <Delivery/>
}
