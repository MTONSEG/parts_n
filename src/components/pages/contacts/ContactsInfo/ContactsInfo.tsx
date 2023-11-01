import Image from 'next/image'
import './ContactsInfo.scss';

export function ContactsInfo() {
	return (
		<ul className='info-contacts'>
			<li className='info-contacts__item'>
				<p className='info-contacts__item-title'>
					<Image
						src={'/icons/location.svg'}
						width={16}
						height={19}
						alt='Location'
					/>
					Адрес:
				</p>
				<p className='info-contacts__item-value'>Город, ул. 12, д.1</p>
			</li>
			<li className='info-contacts__item'>
				<p className='info-contacts__item-title'>
					<Image
						src={'/icons/phone.svg'}
						width={14}
						height={14}
						alt='Location'
					/>
					Телефон:
				</p>
				<a
					href='tel:+380663888895'
					className='info-contacts__item-value info-contacts__item-value_link'
				>
					(066) 388-88 95
				</a>
			</li>
			<li className='info-contacts__item'>
				<p className='info-contacts__item-title'>
					<Image
						src={'/icons/clock.svg'}
						width={20}
						height={20}
						alt='Location'
					/>
					Мы работаем:
				</p>
				<div className='info-contacts__item-value'>
					<p>
						<span>Пн-Пт</span> 10:00 - 19:00
					</p>
					<p>
						<span>Сб-Вс</span> 10:00 - 18:00
					</p>
				</div>
			</li>
			<li className='info-contacts__item'>
				<p className='info-contacts__item-title'>
					<Image
						src={'/icons/email.svg'}
						width={20}
						height={16}
						alt='Location'
					/>
					E-mail:
				</p>
				<a
					href='mailto:shop@gmail.com'
					className='info-contacts__item-value  info-contacts__item-value_link'
				>
					shop@gmail.com
				</a>
			</li>
		</ul>
	)
}
