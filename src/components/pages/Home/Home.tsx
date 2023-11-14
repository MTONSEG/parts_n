import Link from 'next/link'
import NavPanel from '@/components/common/NavPanel/NavPanel'
import { BannerHome } from './BannerHome/BannerHome'
import { API } from '../../../api'
import { HomeData } from './home.types'
import ListCategoryHome from './ListCategoryHome/ListCategoryHome'

const getData = async (): Promise<HomeData> => {
	const res = await fetch(`${API}/home?populate[banner][populate]=*`, {
		cache: 'no-cache'
	})
	
	const data = await res.json()

	return data.data.attributes
}

export default async function Home() {
	const data: HomeData = await getData()
	return (
		<>
			<NavPanel />
			<BannerHome state={data.banner} />
			<ListCategoryHome/>
			<Link href='/product'>product</Link>
			<Link href='/about'>about</Link>
		</>
	)
}
