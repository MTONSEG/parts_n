import type { Metadata } from 'next'
import type { ILink } from '../../../models/models'
import { Breadcrumbs } from '../../../components/common/Breadcrumbs/Breadcrumbs'
import { Title } from '../../../components/ui/atoms/Title/Title'
import { ContactsInfo } from '../../../components/pages/contacts/ContactsInfo/ContactsInfo'
import './contacts.scss'

export const metadata: Metadata = {
	title: 'Contacts | NOUT PARTS',
}

const breadcrumbs: ILink[] = [
	{
		title: 'Контакты',
		path: '#',
	},
]

export default function ContactsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Breadcrumbs links={breadcrumbs} />
			<div className='contacts'>
				<div className='container'>
					<div className='contacts__row'>
						<Title>Контакты</Title>
						<p className='contacts__text'>
							У вас остались вопросы? Пожалуйста оставьте свои данные и
							мы свяжемся с вами!
						</p>
						<div className='contacts__body'>
							<ContactsInfo />
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
