'use client'

import Image from 'next/image'
import { useAppSelector } from '../../../../hooks/useRedux'
import './CallbackHeader.scss'

export function CallbackHeader() {
	const data = useAppSelector(state => state.header.callbackBtn)

	return (
		<div className='callback-header'>
			<Image
				src='/icons/phone.svg'
				width={18}
				height={18}
				alt='phone icon'
				className='callback-header__icon'
			/>
			<div className='callback-header__body'>
				<p className='callback-header__tel'>{data.tel}</p>
				<p className='callback-header__text'>{data.text}</p>
			</div>
		</div>
	)
}
