'use client'

import { useRouter } from 'next/navigation'
import type { ButtonTypes } from '../../../../models/models'
import { ReactNode } from 'react'

type ButtonPropsType = {
	path?: string
	type?: ButtonTypes
	className?: string
	children?: ReactNode
	onClick?: () => void
}

export function Button({
	path,
	type = 'button',
	className,
	children,
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
		>
			{children}
		</button>
	)
}
