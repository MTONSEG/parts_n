import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About page | NOUT PARTS',
}

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}