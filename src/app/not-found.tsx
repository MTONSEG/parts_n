import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { API } from '../api'

export const metadata: Metadata = {
	title: 'Page is not found | NOUT PARTS',
}

const getData = async (): Promise<NoFoundData> => {
	const res = await fetch(`${API}/not-founds?populate=*`, {
		next: { revalidate: 7200 }
	})

	const data = await res.json()

	return data.data[0].attributes
}

export default async function NotFound() {
	const data: NoFoundData = await getData()

	return (
		<div className='not-found'>
			<div className='container'>
				<div className='not-found__row'>
					<div className='not-found__body'>
						<h1 className='not-found__title'>{data.title}</h1>
						<div className='not-found__text-wrap'>
							<h2 className='not-found__subtitle'>{data.subtitle}</h2>
							<p className='not-found__text'>{data.text}</p>
						</div>
						<Link href={'/'} className='not-found__btn'>
							{data.titleBtn}
						</Link>
						<ul className='not-found__list'>
							{data.links.map(link => (
								<li className='not-found__item' key={link.id}>
									<Link href={link.path} className='not-found__link'>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
						<div className='not-found__support'>
							<Image
								src='/icons/warning.svg'
								width={23}
								height={20}
								alt='icon'
								className='not-found__warn-icon'
							/>
							<button
								className='not-found__supp-link'
							>
								{data.support}
							</button>
							<Image
								src='/icons/quarnuts.png'
								width={89}
								height={23}
								alt='Quarnuts'
								className='not-found__quarn-icon'
							/>
						</div>
					</div>
					<div className='not-found__error-num'>
						<Image
							src='/icons/404.svg'
							width={631}
							height={276}
							alt='404'
							className='not-found__error-num-icon'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export interface NoFoundData {
	title: string
	subtitle: string
	titleBtn: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	support: string
	text: string
	links: Link[]
}

interface Link {
	id: number
	title: string
	path: string
}
