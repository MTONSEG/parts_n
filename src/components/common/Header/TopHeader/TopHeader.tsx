'use client'

import Link from 'next/link'
import './TopHeader.scss'
import { useActions, useAppSelector } from '../../../../hooks/useRedux'
import { CallbackHeader } from '../CallbackHeader/CallbackHeader'
import InstagramSVG from '@/icons/insta.svg'
import FacebookSVG from '@/icons/fb.svg'
import CloseSVG from '@/icons/close.svg'
import { LegacyRef, useEffect, useRef } from 'react'
import useResize from '../../../../hooks/useResize'
import { FavoriteHeader } from '../FavoriteHeader/FavoriteHeader'

export function TopHeader() {
	const size = useResize()
	const links = useAppSelector(state => state.header.staticLinks)
	const activeMenu = useAppSelector(state => state.header.activeMenu)
	const { disableMenu } = useActions()
	const rowRef: LegacyRef<HTMLDivElement> = useRef(null)

	useEffect(() => {
		rowRef.current?.addEventListener('click', (e: MouseEvent) => {
			e.stopPropagation()
		})
	}, [rowRef])

	return (
		<div
			className={`top-header ${activeMenu ? 'active' : ''}`}
			onClick={() => {
				disableMenu()
			}}
		>
			<button
				className='top-header__close-icon'
				onClick={() => {
					disableMenu()
				}}
			>
				<CloseSVG />
			</button>

			<div className='container'>
				<div ref={rowRef} className='top-header__row'>
					<ul className='top-header__list'>
						{links.map(link => (
							<li className='top-header__item' key={link.id}>
								<Link href={link.path} className='top-header__link'>
									{link.title}
								</Link>
							</li>
						))}
					</ul>

					{size[0] < 992 ? <FavoriteHeader /> : <></>}

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
