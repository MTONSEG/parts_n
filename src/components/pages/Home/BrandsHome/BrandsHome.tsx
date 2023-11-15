import Image from 'next/image'
import './BrandsHome.scss'
import Link from 'next/link'
import type { BrandsHomeData } from '../home.types'


interface PropsType {
	state: BrandsHomeData[]
}

export default function BrandsHome({ state }: PropsType) {
	return (
		<section className='brands-home'>
			<div className='container'>
				<ul className='brands-home__list'>
					{state?.map(el => (
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
		</section>
	)
}
