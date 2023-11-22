'use client'
import FacebookSVG from '@/icons/fb-footer.svg'
import InstagramSVG from '@/icons/insta-full.svg'
import Image from 'next/image'
import { useAppSelector } from '../../../../hooks/useTypedRedux'

export default function BottomFooter() {
	const data = useAppSelector(state => state.footer)
	return (
		<div className='bottom-footer'>
			<div className='bottom-footer__soc'>
				<a href='#' className='bottom-footer__soc-link'>
					<FacebookSVG />
				</a>
				<a href='#' className='bottom-footer__soc-link'>
					<InstagramSVG />
				</a>
			</div>
			<div className='bottom-footer__payment'>
				<Image
					src='/icons/visa.jpg'
					width={33}
					height={21}
					alt='Visa'
					className='bottom-footer__pay-icon'
				/>
				<Image
					src='/icons/mastercard.jpg'
					width={33}
					height={21}
					alt='MasterCard'
					className='bottom-footer__pay-icon'
				/>
			</div>
			<p className='bottom-footer__copy'>{data.copyright}</p>
		</div>
	)
}
