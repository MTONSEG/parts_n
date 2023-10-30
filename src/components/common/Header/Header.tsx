import Link from 'next/link';
import { ABOUT_PATH, CONTACTS_PATH, DELIVERY_PATH, WARRANTY_PATH } from '../../../routes/routes';
import './Header.scss';

export default function Header() {
	return (
		<header className='header'>
			<div className="container">
				<div className="header__top top-header">
					<ul className="top-header__list">
						<li className='top-header__item'>
							<Link href={ABOUT_PATH} className='top-header__link'>О нас</Link>
						</li>
						<li className='top-header__item'>
							<Link href={DELIVERY_PATH} className='top-header__link'>Доставка и оплата</Link>
						</li>
						<li className='top-header__item'>
							<Link href={WARRANTY_PATH} className='top-header__link'>Гарантии</Link>
						</li>
						<li className='top-header__item'>
							<Link href={CONTACTS_PATH} className='top-header__link'>Контакты</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
