import type { ILink } from '../models/models'
import {
	CATALOG_PATH,
	CONTACTS_PATH,
	DELIVERY_PATH,
	WARRANTY_PATH,
} from '../routes/routes'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Page is not found | NOUT PARTS',
}

export default function NotFound() {
	return (
		<div className='not-found'>
			<div className='container'>
				<div className='not-found__row'>
					<div className='not-found__body'>
						<h1 className='not-found__title'>{data.title}</h1>
						<div className='not-found__text-wrap'>
							<h2 className='not-found__subtitle'>{data.subtitle}</h2>
							<p className='not-found__text'>{data.text}</p>
						</div>
						<Link href={'/'} className='not-found__btn'>
							{data.titleBtn}
						</Link>
						<ul className='not-found__list'>
							{data.list.map((link, index) => (
								<li className='not-found__item' key={index}>
									<Link href={link.path} className='not-found__link'>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
						<div className='not-found__support'>
							<Image
								src='/icons/warning.svg'
								width={23}
								height={20}
								alt='icon'
								className='not-found__warn-icon'
							/>
							<Link
								href={data.support.path}
								className='not-found__supp-link'
							>
								{data.support.title}
							</Link>
							<Image
								src='/icons/quarnuts.png'
								width={89}
								height={23}
								alt='Quarnuts'
								className='not-found__quarn-icon'
							/>
						</div>
					</div>
					<div className='not-found__error-num'>
						<Image
							src='/icons/404.svg'
							width={631}
							height={276}
							alt='404'
							className='not-found__error-num-icon'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

interface INotFoundData {
	title: string
	subtitle: string
	text: string
	titleBtn: string
	list: ILink[]
	support: ILink
	num: number
}

export const data: INotFoundData = {
	title: 'Упс! Что-то пошло не так! ',
	subtitle: 'Страница которую вы запрашиваете не найдена. ',
	text: 'Возможно она была удалена или вы набрали неверный адрес.',
	titleBtn: 'Вернуться на главную',
	support: {
		title: 'Служба поддержки',
		path: '#',
	},
	list: [
		{
			title: 'Каталог',
			path: CATALOG_PATH,
		},
		{
			title: 'Доставка и оплата',
			path: DELIVERY_PATH,
		},
		{
			title: 'Гарантии',
			path: WARRANTY_PATH,
		},
		{
			title: 'Контакты',
			path: CONTACTS_PATH,
		},
	],
	num: 404,
}
