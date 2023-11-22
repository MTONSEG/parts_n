'use client'

import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './CallbackHeader.scss'
import PhoneSVG from '@/icons/phone.svg'
import LineSVG from '@/icons/lines-cb.svg'

export function CallbackHeader() {
	const data = useAppSelector(state => state.header.callbackBtn)

	return (
		<div className='callback-header'>
			<div className='callback-header__icon'>
				<PhoneSVG />
			</div>

			<div className='callback-header__body'>
				<a href={`tel:${data.hrefTel}`} className='callback-header__tel'>
					{data.tel}
				</a>
				<p className='callback-header__time'>{data.time}</p>
				<p className='callback-header__text'>
					<span>{data.text}</span>
					<LineSVG />
				</p>
			</div>
		</div>
	)
}
