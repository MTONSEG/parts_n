import type { Metadata } from 'next'
import '@/styles/global.scss'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import { ReduxProvider } from '@/redux/ReduxProvider'
import { roboto } from '@/fonts'

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
		<html lang='ru'>
			<body className={roboto.variable}>
				<ReduxProvider>
					<div className='wrapper'>
						<Header />
						<main className='main'>{children}</main>
						<Footer />
					</div>
				</ReduxProvider>
			</body>
		</html>
	)
}
