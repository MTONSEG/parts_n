import Image from 'next/image'
import { Breadcrumbs } from '@/components/common/Breadcrumbs/Breadcrumbs'
import { ILink } from '@/ts_types/types'
import './delivery.scss'
import { sfProDisplay700 } from '../../../fonts/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Delivery and Payment | NOUT PARTS'
}

export default function Delivery() {
	const fontSF = sfProDisplay700.style

	const breadcrumbs: ILink[] = [
		{
			title: 'Доставка и оплата',
			path: '#',
		},
	]

	return (
		<>
			<Breadcrumbs links={breadcrumbs} />
			<div className='delivery'>
				<div className='container'>
					<h1 className='delivery__title'>Доставка и оплата </h1>

					<div className='delivery__row'>
						<ul className='delivery__list'>
							<li className='delivery__item delivery__item_delivery '>
								<Image
									src='/icons/delivery_1.svg'
									width={72}
									height={72}
									alt='Icon'
									className='delivery__icon'
								/>
								<h2 className='delivery__item-title' style={fontSF}>
									Доставка
								</h2>
								<p className='delivery__item-text'>
									Осуществляется через операторов доставки, на выбор:
								</p>
								<ul className='delivery__item-list'>
									<li className='delivery__item-delivery delivery__item-delivery_novaposhta'>
										<Image
											src='/icons/nova_poshta.png'
											width={154}
											height={55}
											alt='Нова Пошта'
											className='delivery__item-image'
										/>
										<ul className='delivery__nova-list'>
											<li>Наложенный платёж</li>
											<li>Предоплата</li>
										</ul>
									</li>
									<li className='delivery__item-delivery delivery__item-delivery_ukrposhta'>
										<Image
											src='/icons/ukrposhta.png'
											width={163}
											height={44}
											alt='Укр Пошта'
											className='delivery__item-image'
										/>
										<p className='delivery__item-info'>
											Доставка Укрпочтой осуществляется только
											<span> по полной предоплате</span>
										</p>
									</li>
								</ul>
								<p className='delivery__bottom-text'>
									* Cумма доставки по тарифам компании
								</p>
							</li>

							<li className='delivery__item delivery__item_payment'>
								<Image
									src='/icons/delivery_2.svg'
									width={72}
									height={72}
									alt='Icon'
									className='delivery__icon'
								/>

								<h2 className='delivery__item-title' style={fontSF}>
									Оплата
								</h2>
								<h3 className='delivery__item-subtitle'>
									Мы предлагаем два варинта оплаты заказа:
								</h3>
								<ol className='delivery__pay-list'>
									<li>Оплата при получении</li>
									<li>Предоплата на карту</li>
								</ol>
								<div className='delivery__pay-text'>
									Доставка{' '}
									<Image
										src='/icons/ukrposhta.png'
										width={109}
										height={30}
										alt='Укр Пошта'
										className='delivery__text-image'
									/>{' '}
									<p>
										осуществляется только{' '}
										<span className='strong'>
											по полной предоплате
										</span>
									</p>
								</div>

								<h4 className='delivery__pays-title'>
									Принимаем оплату в :
								</h4>
								<div className='delivery__pay-images'>
									<Image
										src='/icons/visa.jpg'
										width={54}
										height={36}
										alt='Visa'
										className='delivery__pay-image'
									/>
									<Image
										src='/icons/mastercard.jpg'
										width={55}
										height={36}
										alt='MasterCard'
										className='delivery__pay-image'
									/>
									<Image
										src='/icons/privat.png'
										width={139}
										height={23}
										alt='PrivatBank'
										className='delivery__pay-image'
									/>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
