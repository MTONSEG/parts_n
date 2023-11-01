import type { Metadata } from 'next'
import '../styles/global.scss'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import { ReduxProvider } from '@/redux/ReduxProvider'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['cyrillic', 'latin'],
	variable: '--font-roboto',
})

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
		<ReduxProvider>
			<html lang='ru'>
				<body className={roboto.variable}>
					<div className='wrapper'>
						<Header />
						<main className='main'>{children}</main>
						<Footer />
					</div>
				</body>
			</html>
		</ReduxProvider>
	)
}
