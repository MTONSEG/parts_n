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
		<div className={`item-category item-category_${category.attributes.type}`}>
			<Link
				href={`/catalog/${category.attributes.type}`}
				className='item-category__top'
				style={{ background: `${category.attributes.color}` }}
			>
				<h2 className='item-category__title'>{title}</h2>
				<h3 className='item-category__subtitle'>{subtitle}</h3>
				<Image
					src={category.attributes.image.data.attributes.url}
					width={category.attributes.image.data.attributes.width}
					height={category.attributes.image.data.attributes.height}
					alt={category.attributes.image.data.attributes.name}
					className='item-category__image'
				/>
			</Link>
			<ul className='item-category__brand-list'>
				{brands?.map(brand => (
					<li className='item-category__brand-item' key={brand.id}>
						<Link
							href={`/catalog/${
								category.attributes.type
							}/${brand.attributes.name.toLowerCase()}`}
							className='item-category__brand-link'
						>
							{brand.attributes.name}
						</Link>
					</li>
				))}
				<li className='item-category__brand-item item-category__brand-item_all'>
					<Link
						className='item-category__brand-link'
						href={`/catalog/${category.attributes.type}`}
					>
						Смотреть все
					</Link>
				</li>
			</ul>
		</div>
	)
}
