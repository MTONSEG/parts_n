'use client'

import Link from 'next/link'
import './TopHeader.scss'
import { useActions, useAppSelector } from '../../../../hooks/useRedux'
import { CallbackHeader } from '../CallbackHeader/CallbackHeader'
import CloseSVG from '@/icons/close.svg'
import { MouseEvent} from 'react'
import { FavoriteHeader } from '../FavoriteHeader/FavoriteHeader'
import { MobileCatalogHeader } from '../MobileCatalogHeader/MobileCatalogHeader'

export function TopHeader() {
	const links = useAppSelector(state => state.header.staticLinks)
	const activeMenu = useAppSelector(state => state.header.activeMenu)
	const { disableMenu } = useActions()

	return (
		<div className={`top-header ${activeMenu ? 'active' : ''}`}>
			<div
				className='container'
				onClick={event => {
					event.stopPropagation()
				}}
			>
				<div
					className='top-header__mobile-wrapper'
					onClick={() => {
						disableMenu()
					}}
				></div>
				<div className='top-header__row'>
					<button
						aria-label='Close Menu'
						className='top-header__close-icon'
						onClick={() => {
							disableMenu()
						}}
					>
						<CloseSVG />
					</button>
					<MobileCatalogHeader />
					<ul className='top-header__list'>
						{links.map(link => (
							<li className='top-header__item' key={link.id}>
								<Link
									href={link.path}
									className='top-header__link'
									onClick={() => {
										disableMenu()
									}}
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>

					<FavoriteHeader />

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
						{/* <div className='top-header__soc'>
							<a href={'#'} className='top-header__soc-link'>
								<InstagramSVG />
							</a>
							<a href={'#'} className='top-header__soc-link'>
								<FacebookSVG />
							</a>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
