import { Breadcrumbs } from '../../../components/common/Breadcrumbs/Breadcrumbs'
import { ILink } from '../../../models/models'
import Image from 'next/image'
import './about.scss'
import { API } from '../../../api'
import parse from 'html-react-parser'

const getData = async (): Promise<Attributes> => {
	const res = await fetch(
		`${API}/abouts?populate[about][populate]=*&populate[benefit][populate]=*`,
		{
			next: {revalidate: 7200}
		}
	)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	let data = await res.json()

	return data.data[0].attributes
}

export default async function About() {
	const breadcrumbs: ILink[] = [
		{
			title: 'О нас',
			path: '#',
		},
	]

	const data: Attributes = await getData()

	return (
		<div className='about'>
			<Breadcrumbs links={breadcrumbs} />
			<div className='about__head'>
				<div className='container'>
					<div className='about__head-row'>
						<h1 className='about__head-title'>{parse(data.title)}</h1>
						<p className='about__head-text'>{data.text}</p>
					</div>
				</div>
			</div>
			<div className='main-about'>
				<div className='container'>
					<ul className='main-about__list'>
						{data.about.map(item => (
							<li className='main-about__item' key={item.id}>
								<Image
									src={item.icon.data[0].attributes.url}
									height={38}
									width={38}
									alt='Team'
									className='main-about__image'
								/>
								<h2 className='main-about__title'>{item.title}</h2>
								<div className='main-about__text'>{parse(item.text)}</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='footer-about'>
				<div className='container'>
					<h3 className='footer-about__title'>{parse(data.subtitle)}</h3>
					<ul className='footer-about__list'>
						{data.benefit.map((item, index) => (
							<li className='footer-about__item' key={index}>
								<Image
									src={item.icon.data[0].attributes.url}
									width={39}
									height={43}
									alt='icon'
									className='footer-about__icon'
								/>
								<h4 className='footer-about__title-item'>
									{item.title}
								</h4>
								<p className='footer-about__text'>{item.text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export interface Daum {
	id: number
	attributes: Attributes
}

export interface Attributes {
	title: string
	text: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	subtitle: string
	about: About[]
	benefit: Benefit[]
}

export interface About {
	id: number
	title: string
	text: string
	icon: Icon
}

export interface Icon {
	data: Daum2[]
}

export interface Daum2 {
	id: number
	attributes: Attributes2
}

export interface Attributes2 {
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
}

export interface ProviderMetadata {
	public_id: string
	resource_type: string
}

export interface Benefit {
	id: number
	title: string
	text: string
	icon: Icon2
}

export interface Icon2 {
	data: Daum3[]
}

export interface Daum3 {
	id: number
	attributes: Attributes3
}

export interface Attributes3 {
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
	provider_metadata: ProviderMetadata2
	createdAt: string
	updatedAt: string
}

export interface ProviderMetadata2 {
	public_id: string
	resource_type: string
}

export interface Meta {
	pagination: Pagination
}

export interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}