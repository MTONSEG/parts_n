import type { Metadata } from 'next'
import '../styles/global.scss'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import { roboto } from '../fonts/fonts'
import {ReduxProvider} from '@/redux/ReduxProvider'

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
			<body className={roboto.className}>
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
