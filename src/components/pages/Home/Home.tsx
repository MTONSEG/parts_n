import NavPanel from '@/components/common/NavPanel/NavPanel'
import { BannerHome } from './BannerHome/BannerHome'
import { API } from '../../../api'
import { HomeData, HomeDataAttributes } from './home.types'
import ListCategoryHome from './ListCategoryHome/ListCategoryHome'
import BrandsHome from './BrandsHome/BrandsHome'
import BenefitsHome from './BenefitsHome/BenefitsHome'

const getData = async (): Promise<HomeDataAttributes> => {
	const res = await fetch(
		`${API}/home?populate[banner][populate]=*&populate[categories][populate]=*&populate[brands][populate]=*&populate[benefits][populate]=*`,
		{
			cache: 'no-cache',
		}
	)
	if (!res.ok) {
		throw new Error('Failed to fetching data')
	}

	const data: HomeData = await res.json()

	return data.data.attributes
}

export default async function Home() {
	const data = await getData()
	return (
		<>
			<NavPanel />
			<BannerHome state={data.banner} />
			<ListCategoryHome state={data.categories.data} />
			<BrandsHome state={data.brands.data} />
			<BenefitsHome state={data.benefits} />
		</>
	)
}
