import Logo from '../../ui/atoms/Logo/Logo'
import BottomFooter from './BottomFooter/BottomFooter'
import { CallbackFooter } from './CallbackFooter/CallbackFooter.'
import './Footer.scss'
import ListFooter from './ListFooter/ListFooter'
import SubscribeFooter from './SubscribeFooter/SubscribeFooter'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__body'>
					<div className='footer__info'>
						<Logo width={178} height={68} variant='footer' />
						<CallbackFooter />
						<SubscribeFooter />
					</div>
					<ListFooter/>
				</div>
				<BottomFooter />
			</div>
		</footer>
	)
}
