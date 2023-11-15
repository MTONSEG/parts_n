import type { Metadata } from 'next'
import Warranty from '@/components/screens/Warranty/Warranty'

export const metadata: Metadata = {
	title: 'Warranties | NOUT PARTS',
}

export default function WarrantyPage() {
	return <Warranty />
}
