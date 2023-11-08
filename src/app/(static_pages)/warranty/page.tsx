import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/common/Breadcrumbs/Breadcrumbs'
import type { ILink } from '@/models/models'
import Image from 'next/image'
import './warranty.scss'
import MarkDown from 'react-markdown'
import { API } from '../../../api'

export const metadata: Metadata = {
	title: 'Warranties | NOUT PARTS',
}

const getData = async (): Promise<WarrantyData> => {
	const res = await fetch(
		`${API}/warranties?populate[bonusIcon][populate]=*&populate[items]populate=*`,
		{
			next: {
				revalidate: 7200
			}
		}
	)

	if (!res.ok) {
		throw new Error('Failed to fetching data')
	}

	const data = await res.json()

	return data.data[0].attributes
}

export default async function Warranty() {
	const breadcrumbs: ILink[] = [
		{
			title: 'Гарантии',
			path: '#',
		},
	]

	const data: WarrantyData = await getData()

	console.log(data)

	return (
		<>
			<Breadcrumbs links={breadcrumbs} />
			<div className='warranty'>
				<div className='container'>
					<div className='warranty__row'>
						<h1 className='warranty__title'>Гарантии</h1>
						<ul className='warranty__list'>
							{data.items.map(el => (
								<li className='warranty__item' key={el.id}>
									<h2 className='warranty__item-title'>{el.title}</h2>
									<div className='warranty__item-body'>
										<MarkDown>{el.text}</MarkDown>
									</div>
								</li>
							))}
						</ul>

						<div className='warranty__bonus'>
							<Image
								src={data.bonusIcon.data[0].attributes.url}
								width={78}
								height={88}
								alt='bonus'
								className='warranty__icon'
							/>
							<div className='warranty__text-wrap'>
								<h3>{data.titleBonus}</h3>
								<p>
									{data.textBonus}
								</p>
							</div>
							<Image
								src='/icons/warranty_bonus_line.svg'
								width={178}
								height={144}
								alt='bonus'
								className='warranty__line warranty__line_left'
							/>

							<Image
								src='/icons/warranty_bonus_line2.svg'
								width={161}
								height={131}
								alt='bonus'
								className='warranty__line warranty__line_right'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

interface WarrantyData {
	title: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	titleBonus: string
	textBonus: string
	bonusIcon: BonusIcon
	items: ItemWarranty[]
}

interface ItemWarranty {
	id: number
	title: string
	text: string
}

export interface BonusIcon {
	data: Daum[]
}

export interface Daum {
	id: number
	attributes: Attributes
}

export interface Attributes {
	name: string
	alternativeText: any
	caption: any
	width: number
	height: number
	formats: any
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: any
	provider: string
	provider_metadata: ProviderMetadata
	createdAt: string
	updatedAt: string
	related: Related[]
}

export interface ProviderMetadata {
	public_id: string
	resource_type: string
}

export interface Related {
	__type: string
	id: number
	title: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	titleBonus: string
	textBonus: string
}
