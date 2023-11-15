'use client'

import { useRouter } from 'next/navigation'
import type { CategoryHomeData } from '../list-catalog.types'
import Image from 'next/image'

interface PropsType {
	el: CategoryHomeData
}

export default function ItemListCategory({ el }: PropsType) {
	const router = useRouter()
	return (
		<li
			className={`list-category__item list-category__item_${el.attributes.type}`}
			style={{ backgroundColor: el.attributes.color }}
			key={el.id}
			onClick={() => {
				router.push(`/catalog/${el.attributes.type}`)
			}}
		>
			<h2 className='list-category__item-title'>{el.attributes.title}</h2>
			{el.attributes.subtitle ? (
				<h3 className='list-category__item-subtitle'>
					{el.attributes?.subtitle}
				</h3>
			) : (
				<></>
			)}
			<div className='list-category__item-image-wrap'>
				<Image
					src={el.attributes.image.data.attributes.url}
					alt={el.attributes.type}
					fill
				/>
			</div>
		</li>
	)
}
