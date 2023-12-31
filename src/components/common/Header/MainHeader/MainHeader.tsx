'use client'

import './MainHeader.scss'
import { SearchForm } from '../../../ui/forms/SearchForm/SearchForm'
import { FavoriteHeader } from '../FavoriteHeader/FavoriteHeader'
import { CartHeader } from '../CartHeader/CartHeader'
import BurgerSVG from '@/icons/burger.svg'
import { CatalogButton } from '../../../ui/buttons/CatalogButton/CatalogButton'
import Logo from '../../../ui/atoms/Logo/Logo'
import { useActions } from '../../../../hooks/useAction'

export function MainHeader() {
	const { enableMenu } = useActions()

	return (
		<div className='main-header'>
			<div className='container'>
				<div className='main-header__row'>
					<button
						className='main-header__burger-icon'
						onClick={() => {
							enableMenu()
						}}
						aria-label='Open Menu'
					>
						<BurgerSVG />
					</button>
					<Logo height={69} width={162} variant='header' />
					<CatalogButton title='Каталог' />

					<SearchForm />
					<div className='main-header__buttons'>
						<FavoriteHeader />

						<CartHeader />
					</div>
				</div>
			</div>
		</div>
	)
}
