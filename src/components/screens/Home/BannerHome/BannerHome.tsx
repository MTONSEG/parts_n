'use client'

import Image from 'next/image'
import './BannerHome.scss'

import Markdown from 'react-markdown'
import { Button } from '../../../ui/buttons/Button/Button'
import type { Banner } from '../home.types'

type PropsType = {
	state: Banner
}

export function BannerHome({ state }: PropsType) {
	return (
		<section className='container'>
			<div className='banner-home'>
				<h1 className='banner-home__title'>{state.title}</h1>
				<div className='banner-home__text'>
					<Markdown>{state.text}</Markdown>
				</div>

				<div className='banner-home__about'>
					<Markdown>{state.counter}</Markdown>
				</div>

				<div className='banner-home__info'></div>

				<Image
					src={state.image.data.attributes.url}
					width={378}
					height={218}
					alt='NoteBook'
					sizes='(max-width: 992px) 147px'
					className='banner-home__notebook-img'
					priority
				/>
				<Image
					src={state.imageTable.data?.attributes.url}
					width={478}
					height={211}
					alt='NoteBook'
					sizes='(max-width: 992px) 179px'
					className='banner-home__table-img'
					priority
				/>
				<Button path='/catalog' className='banner-home__btn' ariaLabel='Go to Catalog'>
					{state.titleBtn}
				</Button>
			</div>
		</section>
	)
}
