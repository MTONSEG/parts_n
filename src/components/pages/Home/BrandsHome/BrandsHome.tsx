import Image from 'next/image'
import { API } from '../../../../api'
import './BrandsHome.scss'
import { BrandsHomeData } from './brands-home.types'
import Link from 'next/link'

const getData = async (): Promise<BrandsHomeData[]> => {
	const res = await fetch(`${API}/brands?sort[0]=name&populate=*`, {
		next: { revalidate: 7200 },
	})

	if (!res.ok) {
		throw new Error('Failed to fetching data')
	}

	const data = await res.json()

	return data.data
}

export default async function BrandsHome() {
	const brands: BrandsHomeData[] = await getData()

	return (
		<div className='brands-home'>
			<div className='container'>
				<ul className='brands-home__list'>
					{brands?.map(el => (
						<li className='brands-home__item' key={el.id}>
							<Link href={'/catalog'} className='brands-home__link'>
								<Image
									src={el.attributes.icon.data.attributes.url}
									width={el.attributes.icon.data.attributes.width}
									height={el.attributes.icon.data.attributes.height}
									alt={el.attributes.name}
									className='brands-home__icon'
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
