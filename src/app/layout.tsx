import type { Metadata } from 'next'
import '@/styles/global.scss'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import { roboto } from '@/fonts'
import { ReduxProvider } from '@/components/providers/ReduxProvider'


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
			<body className={roboto.className}>
				<ReduxProvider>
					<div className={`wrapper ${roboto.variable}`}>
						<Header />
						<main className='main'>{children}</main>
						<Footer />
					</div>
				</ReduxProvider>
			</body>
		</html>
	)
}
