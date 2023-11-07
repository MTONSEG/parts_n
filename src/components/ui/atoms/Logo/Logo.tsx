'use client'
import Link from 'next/link'
import './Logo.scss'
import Image from 'next/image'

type PropsType = {
	variant: 'header' | 'footer'
	width: number
	height: number
}

export default function Logo({ variant, width, height }: PropsType) {
	return (
		<Link href='/' className={`logo logo_${variant}`}>
			<Image
				src='/icons/logo.png'
				width={width}
				height={height}
				alt='logo'
			/>
		</Link>
	)
}
