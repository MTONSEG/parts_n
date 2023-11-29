'use client'

import { useRouter } from 'next/navigation'
import type { ButtonTypes } from '../../../../models/models'
import { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import Image from 'next/image'
import FavoriteIcon from '@/icons/favorite-in-card.svg'
import { SaleSort } from '../../../../redux/catalog/catalog.types'

type ButtonPropsType = {
	path?: string
	type?: ButtonTypes
	className?: string
	children?: ReactNode
	ariaLabel?: string
	variant?: 'favorite' | 'default' | 'cart' | 'square'
	style?: CSSProperties,
	onClick?: () => void
}

export function Button({
	path,
	type = 'button',
	className,
	children,
	ariaLabel = 'Go to Catalog',
	style,
	onClick,
	variant = 'default',
	
}: ButtonPropsType) {
	const router = useRouter()

	const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
		e.stopPropagation()

		if (path) {
			router.push(path)
		}

		onClick?.()
	}
	return (
		<button
			style={style}
			type={type}
			className={`button ${
				className ? className : ''
			} ${`button_${variant}`}`}
			onClick={handleClick}
			aria-label={ariaLabel}
		>
			{variant === 'favorite' ? <FavoriteIcon /> : children}
		</button>
	)
}
