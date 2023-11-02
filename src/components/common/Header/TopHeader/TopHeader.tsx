'use client'

import Link from 'next/link'
import './TopHeader.scss'
import { useAppSelector } from '../../../../hooks/useRedux'
import { CallbackHeader } from '../CallbackHeader/CallbackHeader'
import InstagramSVG from '@/icons/insta.svg'
import FacebookSVG from '@/icons/fb.svg'
import CloseSVG from '@/icons/close.svg'

export function TopHeader() {
	const links = useAppSelector(state => state.header.staticLinks)

	return (
		<div className='top-header'>
			<div className='container'>
				<div className='top-header__row'>
					<button className='top-header__close-icon'>
						<CloseSVG />
					</button>

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
						<div className='top-header__soc'>
							<a href={'#'} className='top-header__soc-link'>
								<InstagramSVG />
							</a>
							<a href={'#'} className='top-header__soc-link'>
								<FacebookSVG />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
