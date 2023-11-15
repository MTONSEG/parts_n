'use client'

import { useRouter } from 'next/navigation'
import type { ButtonTypes } from '../../../../models/models'
import { ReactNode } from 'react'

type ButtonPropsType = {
	path?: string
	type?: ButtonTypes
	className?: string
	children?: ReactNode
	ariaLabel?:string,
	onClick?: () => void
}

export function Button({
	path,
	type = 'button',
	className,
	children,
	ariaLabel = 'Go to Catalog',
	onClick,
}: ButtonPropsType) {
	const router = useRouter()

	const handleClick = () => {
		if (path) {
			router.push(path)
		}

		onClick?.()
	}
	return (
		<button
			type={type}
			className={`button ${className ? className : ''}`}
			onClick={handleClick}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	)
}
