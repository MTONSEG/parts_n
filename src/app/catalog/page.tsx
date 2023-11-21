import { Metadata } from 'next'
import Catalog from '../../components/screens/Catalog/Catalog'

export const metadata: Metadata = {
	title: 'Catalog NOUT PARTS',
	description: 'Catalog',
}

export default function CatalogPage() {
	return <Catalog/>
}
