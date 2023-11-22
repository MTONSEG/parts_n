'use client'

import Link from 'next/link'
import { useAppSelector } from '../../../../hooks/useTypedRedux'

export default function ListFooter() {
	const { nav, catalog, contacts } = useAppSelector(state => state.footer)

	return (
		<div className='list-footer'>
			<div className='list-footer__item'>
				<h2 className='list-footer__item-title'>{nav.title}</h2>
				<ul className='list-footer__list'>
					{nav.list.map(el => (
						<li key={el.id} className='list-footer__list-item'>
							<Link href={el.path}>{el.title}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='list-footer__item'>
				<h2 className='list-footer__item-title'>{catalog.title}</h2>
				<ul className='list-footer__list'>
					{catalog.list.map(el => (
						<li key={el.id} className='list-footer__list-item'>
							<Link href={el.path}>{el.title}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='list-footer__item'>
				<h2 className='list-footer__item-title'>{contacts.title}</h2>
				<ul className='list-footer__list'>
					<li className='list-footer__list-item'>{contacts.addr}</li>
					<li className='list-footer__list-item'>
						<span>{contacts.tel.title}</span>
						<a
							href={contacts.tel.value.path}
							className='list-footer__link'
						>
							{contacts.tel.value.title}
						</a>
					</li>
					<li className='list-footer__list-item'>
						<p>{contacts.workTime.title}</p>
						<p>{contacts.workTime.text}</p>
						<p>{contacts.workTime.time}</p>
					</li>
					<li className='list-footer__list-item'>
						<span>{contacts.email.title}</span>
						<a
							href={contacts.email.value.path}
							className='list-footer__link'
						>
							{contacts.email.value.title}
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
