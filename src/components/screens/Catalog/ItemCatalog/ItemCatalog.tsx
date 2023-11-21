'use client'
import Image from 'next/image'
import type { Brands, CategoriesData, ImageAttr } from '../catalog.types'
import './ItemCatalog.scss'
import Link from 'next/link'

interface PropsType {
	title: string
	subtitle?: string | null
	category: CategoriesData
	brands: Brands[]
}

export default function ItemCatalog(props: PropsType) {
	const { category, brands, title, subtitle } = props

	return (
		<div className={`item-catalog item-catalog_${category.attributes.type}`}>
			<Link
				href={`/catalog/${category.attributes.type}`}
				className='item-catalog__top'
				style={{ background: `${category.attributes.color}` }}
			>
				<h2 className='item-catalog__title'>{title}</h2>
				<h3 className='item-catalog__subtitle'>{subtitle}</h3>
				<Image
					src={category.attributes.image.data.attributes.url}
					width={category.attributes.image.data.attributes.width}
					height={category.attributes.image.data.attributes.height}
					alt={category.attributes.image.data.attributes.name}
					className='item-catalog__image'
				/>
			</Link>
			<ul className='item-catalog__brand-list'>
				{brands?.map(brand => (
					<li className='item-catalog__brand-item' key={brand.id}>
						<Link
							href={`/catalog/${
								category.attributes.type
							}/${brand.attributes.name.toLowerCase()}`}
							className='item-catalog__brand-link'
						>
							{brand.attributes.name}
						</Link>
					</li>
				))}
				<li className='item-catalog__brand-item item-catalog__brand-item_all'>
					<Link
						className='item-catalog__brand-link'
						href={`/catalog/${category.attributes.type}`}
					>
						Смотреть все
					</Link>
				</li>
			</ul>
		</div>
	)
}
