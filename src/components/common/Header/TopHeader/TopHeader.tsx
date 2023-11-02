'use client'

import Link from 'next/link'
import './TopHeader.scss'
import { useAppSelector } from '../../../../hooks/useRedux'
import { CallbackHeader } from '../CallbackHeader/CallbackHeader'


export function TopHeader() {
	const links = useAppSelector(state => state.header.staticLinks)

	return (
		<div className='top-header'>
			<div className='container'>
				<div className='top-header__row'>
					<ul className='top-header__list'>
						{links.map(link => (
							<li className='top-header__item' key={link.id}>
								<Link href={link.path} className='top-header__link'>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
					<div className='top-header__body'>
						<CallbackHeader />
						<div className='top-header__lang'>
							<Link href={'#'} className='top-header__lang-link'>
								Укр
							</Link>
							<Link href={'#'} className='top-header__lang-link'>
								Рус
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
