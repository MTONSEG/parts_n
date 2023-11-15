import Image from 'next/image'
import { Breadcrumbs } from '@/components/common/Breadcrumbs/Breadcrumbs'
import './Delivery.scss'
import { sfProDisplay700 } from '../../../fonts/fonts'
import { ILink } from '@/models/models'
import { API } from '../../../api'
import MarkDown from 'react-markdown'
import { IDeliveryData } from './delivery.types'

const getData = async (): Promise<IDeliveryData> => {
	const res = await fetch(
		`${API}/delivery?populate[payment][populate]=*&populate[delivery][populate]=*`,
		{
			next: {
				revalidate: 7200,
			},
		}
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const data = await res.json()

	return data.data.attributes
}

export default async function Delivery() {
	const fontSF = sfProDisplay700.style

	const breadcrumbs: ILink[] = [
		{
			title: 'Доставка и оплата',
			path: '#',
		},
	]

	const data: IDeliveryData = await getData()

	return (
		<>
			<Breadcrumbs links={breadcrumbs} />
			<div className='delivery'>
				<div className='container'>
					<h1 className='delivery__title'>{data.title}</h1>

					<div className='delivery__row'>
						<ul className='delivery__list'>
							<li className='delivery__item delivery__item_delivery '>
								<Image
									src={data.delivery.icon.data.attributes.url}
									width={72}
									height={72}
									alt='Icon'
									className='delivery__icon'
								/>
								<h2 className='delivery__item-title' style={fontSF}>
									{data.delivery.title}
								</h2>
								<p className='delivery__item-text'>
									{data.delivery.text}
								</p>
								<ul className='delivery__item-list'>
									<li className='delivery__item-delivery delivery__item-delivery_novaposhta'>
										<Image
											src={
												data.delivery.iconNova.data.attributes.url
											}
											width={154}
											height={55}
											alt='Нова Пошта'
											className='delivery__item-image'
										/>
										<div className='delivery__nova-list'>
											<MarkDown>{data.delivery.textNova}</MarkDown>
										</div>
									</li>
									<li className='delivery__item-delivery delivery__item-delivery_ukrposhta'>
										<Image
											src={data.delivery.iconUkr.data.attributes.url}
											width={163}
											height={44}
											alt='Укр Пошта'
											className='delivery__item-image'
										/>
										<div className='delivery__item-info'>
											<MarkDown>{data.delivery.textUkr}</MarkDown>
										</div>
									</li>
								</ul>
								<p className='delivery__bottom-text'>
									{data.delivery.textBottom}
								</p>
							</li>

							<li className='delivery__item delivery__item_payment'>
								<Image
									src={data.payment.icon.data.attributes.url}
									width={72}
									height={72}
									alt='Icon'
									className='delivery__icon'
								/>

								<h2 className='delivery__item-title' style={fontSF}>
									{data.payment.title}
								</h2>
								<div className='delivery__payment-body'>
									<MarkDown>{data.payment.types}</MarkDown>
								</div>

								<div className='delivery__pay-images'>
									<Image
										src={data.payment.iconVisa.data.attributes.url}
										width={54}
										height={36}
										alt='Visa'
										className='delivery__pay-image'
									/>
									<Image
										src={
											data.payment.iconMastercard.data.attributes.url
										}
										width={55}
										height={36}
										alt='MasterCard'
										className='delivery__pay-image'
									/>
									<Image
										src={
											data.payment.iconPrivatbank.data[0].attributes
												.url
										}
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

