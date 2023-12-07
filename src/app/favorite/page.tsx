import type { Metadata } from 'next'
import Favorite from '../../components/screens/Favorite/Favorite'


export const metadata: Metadata = {
	title: 'Favorites NOUT PARTS',
	description: 'Favorites',
}

export default function FavoritePage() {
	return <Favorite />
}
