import { Breadcrumbs } from '../../../components/common/Breadcrumbs/Breadcrumbs'
import { ILink } from '../../../ts_types/types'
import { Metadata } from 'next'
import Image from 'next/image'
import './about.scss'

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
				<div className='container'>
					<ul className='main-about__list'>
						{data.mainList.map((item, index) => (
							<li className='main-about__item' key={index}>
								<Image
									src={item.iconSrc}
									height={38}
									width={38}
									alt='Team'
									className='main-about__image'
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
			</div>
			<div className='footer-about'>
				<div className='container'>
					<h3 className='footer-about__title'>
						{data.titleBottom} <span>{data.titleBottomLabel}</span>
					</h3>
					<ul className='footer-about__list'>
						{data.bottomList.map((item, index) => (
							<li className='footer-about__item' key={index}>
								<Image
									src={item.iconSrc}
									width={39}
									height={43}
									alt='icon'
									className='footer-about__icon'
								/>
								<h4 className='footer-about__title-item'>{item.title}</h4>
								<p className='footer-about__text'>{item.text}</p>
							</li>
						))}
					</ul>
				</div>
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
			iconSrc: 'icons/users_about.svg',
			title: 'Мы команда профессионалов',
			text: 'Которые любят и ценят свою работу. Мы энергичны, молоды и всегда развиваемся. Наши специалисты готовы решить Ваши проблемы, связанные с подбором комплектующих, профессионально и быстро!',
			text2: ' Работа, направленная на то, чтобы заработать и сохранить доверие наших клиентов, - это главный двигатель подхода нашей компании с первого дня.',
		},
		{
			iconSrc: '/icons/elipsys_about.svg',
			title: 'Цель магазина',
			text: 'Обеспечить посетителям максимально удобный сайт для выбора и приобретения запчастей для ноутбука, а так же создать максимально широкий ассортимент для выбора комплектующих.',
			text2: 'Мы стараемся создать высокий сервис и максимально облегчить покупку комплектующих для ноутбука предоставив лучший выбор и необходимую информацию о товарах.',
		},
	],
	titleBottom: 'Работая с нами,',
	titleBottomLabel: 'Вы получаете:',
	bottomList: [
		{
			iconSrc: '/icons/level_about.svg',
			title: 'Высокий уровень обслуживания',
			text: 'Заботимся о каждом клиенты и пытаемся делать высокий уровень обслуживания',
		},
		{
			iconSrc: '/icons/service_about.svg',
			title: 'Качественный сервис',
			text: 'Знаём все о своих товарах, поэтому предоставляем качественную поддержку',
		},
		{
			iconSrc: '/icons/price_about.svg',
			title: 'Гибкую ценовую политику',
			text: 'У нас разнообразный товар и разный уровень цен, мы часто делаем скидки для наших клиентов',
		},
	],
}
