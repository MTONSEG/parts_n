'use client'

import './CatalogHeader.scss'
import { BrandsCatalogHeader } from './BrandsCatalogHeader/BrandsCatalogHeader'
import Link from 'next/link'
import { useActions, useAppSelector } from '../../../../hooks/useRedux'

export function CatalogHeader() {
	const { disableCatalog } = useActions()
	const { activeCatalog } = useAppSelector(state => state.header)

	return (
		<>
			<div className={`catalog-header ${activeCatalog ? 'active' : ''}`}>
				<div className='catalog-header__top'>
					<ul className='catalog-header__list'>
						<li className='catalog-header__item'>
							<Link className='catalog-header__link' href={'/catalog'}>
								Матрицы
							</Link>
						</li>
						<li className='catalog-header__item'>
							<Link className='catalog-header__link' href={'/catalog'}>
								Аккумуляторы
							</Link>
						</li>
						<li className='catalog-header__item'>
							<Link className='catalog-header__link' href={'/catalog'}>
								Жесткие диски
							</Link>
						</li>
						<li className='catalog-header__item'>
							<Link className='catalog-header__link' href={'/catalog'}>
								Клавиатуры
							</Link>
						</li>
						<li className='catalog-header__item'>
							<Link className='catalog-header__link' href={'/catalog'}>
								Оперативная память
							</Link>
						</li>
						<li className='catalog-header__item'>
							<Link className='catalog-header__link' href={'/catalog'}>
								Блоки питания
							</Link>
						</li>
					</ul>

					<div className='categories-catalog'></div>
				</div>
				<BrandsCatalogHeader />
			</div>
			<div
				className='catalog-header__inner'
				onClick={() => {
					disableCatalog()
				}}
			></div>
		</>
	)
}
