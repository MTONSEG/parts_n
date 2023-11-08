import Image from 'next/image'
import './BannerHome.scss'

export default function BannerHome() {
	return (
		<section className='container'>
			<div className='banner-home'>
				<h1 className='banner-home__title'>
					Магазин компьютерных комплектующих
				</h1>
				<p className='banner-home__text'>
					У нас Вы найдете комплектующие для ноутбуков и планшетов:
				</p>
				<ul className='banner-home__list'>
					<li className='banner-home__item'>
						<div className='banner-home__icon-inner'>
							<Image
								src={'/public/icons/home/banner-icon_1.svg'}
								width={16}
								height={16}
								alt='icon'
								className='banner-home__item-icon'
							/>
						</div>
						<span>Корпуса, кулера, шлейфы, петли и разъемы </span>
					</li>
					<li className='banner-home__item'>
						<div className='banner-home__icon-inner'>
							<Image
								src={'/public/icons/home/banner-icon_2.svg'}
								width={11}
								height={21}
								alt='icon'
								className='banner-home__item-icon'
							/>
						</div>
						<span>Зарядные устройства </span>
					</li>{' '}
					<li className='banner-home__item'>
						<div className='banner-home__icon-inner'>
							<Image
								src={'/public/icons/home/banner-icon_3.svg'}
								width={18}
								height={14}
								alt='icon'
								className='banner-home__item-icon'
							/>
						</div>
						<span>Матрицы </span>
					</li>{' '}
					<li className='banner-home__item'>
						<div className='banner-home__icon-inner'>
							<Image
								src={'/public/icons/home/banner-icon_4.svg'}
								width={19}
								height={16}
								alt='icon'
								className='banner-home__item-icon'
							/>
						</div>
						<span>Клавиатуры </span>
					</li>{' '}
					<li className='banner-home__item'>
						<div className='banner-home__icon-inner'>
							<Image
								src={'/public/icons/home/banner-icon_5.svg'}
								width={16}
								height={16}
								alt='icon'
								className='banner-home__item-icon'
							/>
						</div>
						<span>Батареи </span>
					</li>
				</ul>

				<div className='banner-home__about'>
					<h2 className='banner-home__about-title'>О магазине</h2>
					<ul className='banner-home__about-list'>
						<li className='banner-home__about-item'>
							<p>775</p>
							<p>Тыс. товаров</p>
						</li>
						<li className='banner-home__about-item'>
							<p>100</p>
							<p>Брендов</p>
						</li>
					</ul>
				</div>

				<div className='banner-home__info'></div>

				<Image
					src={'/public/images/home/notebook.png'}
					width={378}
					height={218}
					alt='NoteBook'
					className='banner-home__notebook-img'
				/>
				<Image
					src={'/public/images/home/table.png'}
					width={478}
					height={211}
					alt='NoteBook'
					className='banner-home__notebook-img'
				/>
			</div>
		</section>
	)
}
