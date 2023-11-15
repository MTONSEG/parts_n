'use client'
import TelSVG from '@/icons/phone.svg'
import { useAppSelector } from '../../../../hooks/useRedux'

export function CallbackFooter() {
	const data = useAppSelector(state => state.footer);

	return (
		<div className='footer__callback'>
			<p className='footer__callback-tel'>
				<span className='footer__callback-tel-text'>
					{data.contacts.tel.title}
				</span>
				<span className='footer__callback-tel-value'>
					{data.contacts.tel.value.title}
				</span>
			</p>
			<p className='footer__callback-work-time'>
				{data.timeWork}
			</p>
			<button className='footer__callback-btn'>
				<TelSVG />
				<p className='footer__callback-btn-text'>
					<span>{data.callback }</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='150'
						height='1'
						viewBox='0 0 150 1'
						fill='none'
					>
						<path
							d='M1 0.5H149'
							stroke='#36DD65'
							strokeLinecap='round'
							strokeDasharray='6 6'
						/>
					</svg>
				</p>
			</button>
		</div>
	)
}
