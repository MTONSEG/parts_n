import { Breadcrumbs } from '../../../components/common/Breadcrumbs/Breadcrumbs'
import { ILink } from '../../../ts_types/types'
import { Metadata } from 'next'
import Image from 'next/image'
import './about.scss';

export const metadata: Metadata = {
	title: 'About page | NOUT PARTS',
}

export default function About() {
	return (
		<div className='about'>
			<Breadcrumbs links={breadcrumbs} />
			<div className='about__head'>
				<div className='container'>
					<div className='about__head-row'>
						<h1 className='about__head-title'>
							<span>{data.title + ' '}</span>
							<span className='about__head-site'>{data.nameSite}</span>
						</h1>
						<p className='about__head-text'>{data.text}</p>
					</div>
				</div>
			</div>
			<div className='main-about'>
				<ul className='main-about__list'>
					{data.mainList.map((item, index) => (
						<li className='main-about__item' key={index}>
							<Image
								src={item.iconSrc}
								height={38}
								width={38}
								alt='Team'
							/>
							<h2 className='main-about__title'>{item.title}</h2>
							<div className='main-about__text'>
								<p>{item.text}</p>
								{item.text2 && <p>{item.text2}</p>}
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className='footer-about'>
				<h3 className='footer-about__title'></h3>
				<ul className='footer-about__list'>
					{data.bottomList.map((item, index) => (
						<li className='footer-about__item' key={index}>
							<Image
								src={item.iconSrc}
								width={39}
								height={39}
								alt='icon'
								className='footer-about__icon'
							/>
							<h4 className='footer-about__title'>{item.title}</h4>
							<p className='footer-about__text'>{item.text}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export const breadcrumbs: ILink[] = [
	{
		title: 'О нас',
		path: '#',
	},
]

type ItemType = {
	iconSrc: string
	title: string
	text: string
	text2?: string
}

type AboutDataType = {
	title: string
	nameSite: string
	text: string
	mainList: ItemType[]
	titleBottom: string
	titleBottomLabel: string
	bottomList: ItemType[]
}

export const data: AboutDataType = {
	title: 'Интернет-магазин',
	nameSite: 'Noutparts',
	text: 'Это один из крупнейший в Украине магазин для поиска и выбора комплектующих для ноутбуков всех популярных брендов. С помощью нашего сайта вы можете без особых профессиональных навыков выбрать себе необходимые комплектующие по модели вашего ноутбука',
	mainList: [
		{
			iconSrc: '../../../../public/icons/users_about.svg',
			title: '',
			text: '',
			text2: '',
		},
		{
			iconSrc: '../../../../public/icons/elipsys_about.svg',
			title: '',
			text: '',
			text2: '',
		},
	],
	titleBottom: 'Работая с нами,',
	titleBottomLabel: 'Вы получаете:',
	bottomList: [
		{
			iconSrc: '../../../../public/icons/level_about.svg',
			title: '',
			text: '',
		},
		{
			iconSrc: '../../../../public/icons/service_about.svg',
			title: '',
			text: '',
		},
		{
			iconSrc: '../../../../public/icons/price_about.svg',
			title: '',
			text: '',
		},
	],
}
