'use client'

import Link from 'next/link'
import './MainHeader.scss'
import LogoSVG from '@/icons/logo.svg'
import { CatalogHeader } from '../CatalogHeader/CatalogHeader'
import { SearchForm } from '../../../ui/forms/SearchForm/SearchForm'
import { FavoriteHeader } from '../FavoriteHeader/FavoriteHeader'
import { CartHeader } from '../CartHeader/CartHeader'
import BurgerSVG from '@/icons/burger.svg'
import Image from 'next/image'
import useResize from '../../../../hooks/useResize'

export function MainHeader() {
	const size = useResize()

	return (
		<div className='main-header'>
			<div className='container'>
				<div className='main-header__row'>
					<button className='main-header__burger-icon'>
						<BurgerSVG />
					</button>

					<Link href='/' className='main-header__logo'>
						<Image
							src='/icons/logo.png'
							width={162}
							height={69}
							alt='logo'
						/>
					</Link>
					{size[0] < 992 ? <></> : <CatalogHeader />}

					<SearchForm />
					<div className='main-header__buttons'>
						{size[0] < 992 ? <></> : <FavoriteHeader />}

						<CartHeader />
					</div>
				</div>
			</div>
		</div>
	)
}
