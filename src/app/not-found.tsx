import { Metadata } from 'next'
import NotFound from '../components/screens/NotFound/NotFound'

export const metadata: Metadata = {
	title: 'Page is not found | NOUT PARTS',
}

export default function NotFoundPage() {
	return <NotFound />
}
