import Image from 'next/image'
import { Breadcrumbs } from '../../../components/common/Breadcrumbs/Breadcrumbs'
import { ILink } from '../../../ts_types/types'

export default function Delivery() {
	return (
		<>
			<Breadcrumbs links={breadcrumbs} />
			<div className='delivery'>
				<div className='container'>
					<h1 className='delivery__title'>Доставка и оплата </h1>
					<div className='delivery__row'>
						<ul className='delivery__list'>
							<li className='delivery__item delivery__item_delivery'>
								<Image
									src='/icons/delivery_1.svg'
									width={72}
									height={72}
									alt='Icon'
									className='delivery__icon'
								/>
								<h2 className='delivery__item-title'></h2>
								<p className='delivery__item-text'></p>
								<ul className='delivery__item-list'>
									<li className='delivery__item-delivery delivery__item-delivery_novaposhta'>
										<Image
											src='/icons/nova_poshta.png'
											width={154}
											height={55}
											alt='Нова Пошта'
											className='delivery__item-image'
										/>
										<ul>
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
											Доставка Укрпочтой осуществляется только{' '}
											<span>по полной предоплате</span>
										</p>
									</li>
								</ul>
								<p className='delivery__bottom-text'></p>
							</li>

							<li className='delivery__item delivery__item_payment'>
								<Image
									src='/icons/delivery_2.svg'
									width={72}
									height={72}
									alt='Icon'
									className='delivery__icon'
								/>

								<h2 className='delivery__item-title'></h2>
								<h3 className='delivery__item-subtitle'></h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export const breadcrumbs: ILink[] = [
	{
		title: 'Доставка и оплата',
		path: '#',
	},
]
