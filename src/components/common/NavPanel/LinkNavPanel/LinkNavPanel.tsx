'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type PropsType = {
	children: ReactNode
	path: string
	title: string
}

export function LinkNavPanel({ children, path, title }: PropsType) {
	const pathname = usePathname()

	return (
		<Link
			href={path}
			className={`nav-panel__link ${pathname === path ? 'active' : ''}`}
		>
			<div className='nav-panel__link-svg'>{children}</div>
			<span className=''>{title}</span>
		</Link>
	)
}
