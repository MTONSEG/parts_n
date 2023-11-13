import './Contacts.scss'
import Image from 'next/image'
import { API } from '../../../api'
import { ContactsForm } from '../../../components/pages/Contacts/ContactForms/ContactForms'
import Markdown from 'react-markdown'
import type { ILink } from '../../../models/models'
import { Title } from '../../../components/ui/atoms/Title/Title'
import { Breadcrumbs } from '../../../components/common/Breadcrumbs/Breadcrumbs'
import type { IContactsData } from './contacts.types'


const getData = async (): Promise<IContactsData> => {
	const res = await fetch(
		`${API}/contact?populate[address][populate]=*&populate[email][populate]=*&populate[tel][populate]=*&populate[workTime][populate]=*`,
		{
			cache: 'no-cache',
		}
	)

	const data = await res.json()

	return data.data.attributes
}

export default async function Contacts() {
	const data: IContactsData = await getData()

	const breadcrumbs: ILink[] = [
		{
			title: 'Контакты',
			path: '#',
		},
	]

	console.log(data)

	return (
		<>
			<Breadcrumbs links={breadcrumbs} />
			<div className='contacts'>
				<div className='container'>
					<div className='contacts__row'>
						<Title>{data.title}</Title>
						<p className='contacts__text'>
							{data.text}
						</p>
						<div className='contacts__body'>
							<ul className='info-contacts'>
								<li className='info-contacts__item'>
									<p className='info-contacts__item-title'>
										<Image
											src={data.address.icon.data.attributes.url}
											width={16}
											height={19}
											alt='Location'
										/>
										{data.address.title}
									</p>
									<p className='info-contacts__item-value'>
										{data.address.text}
									</p>
								</li>
								<li className='info-contacts__item'>
									<p className='info-contacts__item-title'>
										<Image
											src={data.tel.icon.data.attributes.url}
											width={14}
											height={14}
											alt='Location'
										/>
										{data.tel.title}
									</p>
									<a
										href={`tel:${data.tel.path}`}
										className='info-contacts__item-value info-contacts__item-value_link'
									>
										{data.tel.phone}
									</a>
								</li>
								<li className='info-contacts__item'>
									<p className='info-contacts__item-title'>
										<Image
											src={data.workTime.icon.data.attributes.url}
											width={20}
											height={20}
											alt='Location'
										/>
										{data.workTime.title}
									</p>
									<div className='info-contacts__item-value'>
										<Markdown>{data.workTime.text}</Markdown>
									</div>
								</li>
								<li className='info-contacts__item'>
									<p className='info-contacts__item-title'>
										<Image
											src={data.email.icon.data.attributes.url}
											width={20}
											height={16}
											alt='Location'
										/>
										{data.email.title}
									</p>
									<a
										href={`mailto:${data.email.path}`}
										className='info-contacts__item-value  info-contacts__item-value_link'
									>
										{data.email.phone}
									</a>
								</li>
							</ul>
							<ContactsForm />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
