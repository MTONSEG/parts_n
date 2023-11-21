import { API } from '../../../api'
import { Title } from '../../ui/atoms/Title/Title'
import './Catalog.scss'
import type { CatalogAttributes, CatalogDataType } from './catalog.types'
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs'
import { ILink } from '../../../models/models'
import ItemCatalog from './ItemCatalog/ItemCatalog'

const getData = async (): Promise<CatalogAttributes> => {
	const res = await fetch(
		`${API}/catalog?populate[categories][populate]=*&populate[brands][populate]=*`,
		{
			cache: 'no-cache'
		}
	)

	if (!res.ok) {
		throw new Error('Failed to fetching data')
	}

	const data: CatalogDataType = await res.json()
	return data.data.attributes
}

export default async function Catalog() {
	const { categories, brands, ...state } = await getData();

	const breadcrumbs: ILink[] = [
		{
			title: 'Каталог',
			path: '#',
		},
	]
	return (
		<div className='catalog'>
			<Breadcrumbs links={breadcrumbs} />
			<div className='container'>
				<div className='catalog__row pt-[23px] lg:pt-[45px] pb-[38px] lg:pb-[156px]'>
					<div className='hidden lg:block mb-7'>
						<Title>{state.title}</Title>
						<p className='leading-[1.5]'>{state.subtitle}</p>
					</div>
					<div className='grid grid-cols-2 lg:grid-cols-3 gap-[8px] md:gap-[40px]'>
						{categories.data.map(category => (
							<ItemCatalog
								title={category.attributes.title}
								subtitle={category.attributes.subtitle}
								category={category}
								brands={brands.data}
								key={category.id}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
