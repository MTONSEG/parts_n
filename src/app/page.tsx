import Image from 'next/image'
import { CatalogHeader } from '../components/common/Header/CatalogHeader/CatalogHeader'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Link href='/product'>product</Link>
			<Link href='/about'>about</Link>
		</>
	)
}
