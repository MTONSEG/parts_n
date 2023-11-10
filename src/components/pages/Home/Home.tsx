import Link from 'next/link'
import NavPanel from '@/components/common/NavPanel/NavPanel'
import BannerHome from './BannerHome/BannerHome'

export default function Home() {
	return (
		<>
			<NavPanel />
			<BannerHome/>
			<Link href='/product'>product</Link>
			<Link href='/about'>about</Link>
		</>
	)
}
