'use client'
import { FC } from 'react'
import { ILink } from '../../../ts_types/types'
import Link from 'next/link'
import './Breadcrumbs.scss'
import HomeIcon from '../../../../public/icons/home.svg'

type BreadcrumbsPropsType = {
	links: ILink[]
}

export const Breadcrumbs: FC<BreadcrumbsPropsType> = ({ links }) => {
	return (
		<div className='breadcrumbs'>
			<div className='container'>
				<div className='breadcrumbs__row'>
					<Link href={'/'} className='breadcrumbs__link'>
						<HomeIcon />
					</Link>
					{links.map((link, i) => (
						<Link href={link.path} key={i} className='breadcrumbs__link'>
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
