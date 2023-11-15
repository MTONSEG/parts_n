import './BenefitsHome.scss'
import type { BenefitsHomeData } from '../home.types'
import Image from 'next/image'

interface PropsType {
	state: BenefitsHomeData[]
}

export default function BenefitsHome({ state }: PropsType) {
	return (
		<section className='benefits-home'>
			<div className='container'>
				<ul className='benefits-home__list'>
					{state.map(el => (
						<li className='benefits-home__item' key={el.id}>
							<div className='benefits-home__item-icon-wrap'>
								<Image
									src={el.icon.data[0].attributes.url}
									alt={el.title}
									width={el.icon.data[0].attributes.width}
									height={el.icon.data[0].attributes.height}
									className='benefits-home__item-icon'
								/>
								</div>
								<h2 className='benefits-home__item-title'>
									{el.title}
								</h2>
								<p className='benefits-home__item-text'>{el.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
