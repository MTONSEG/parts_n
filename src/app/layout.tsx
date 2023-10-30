import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/global.scss'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Welcome NOUT PARTS',
	description: 'Details for your PC',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='wrapper'>
					<Header />
					<main className='main'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
