import { Roboto, Inter, Poppins } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-roboto'
})

export const inter = Inter({
	weight: ['400', '700'],
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-inter'
})


export const poppins = Poppins({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export const sfProDisplay300 = localFont({
	src: './files/SFProDisplay-Light.woff',
	display: 'swap',
	variable:'--sf-pro-d300'
})

export const sfProDisplay400 = localFont({
	src: './files/SFProDisplay-Regular.woff',
	display: 'swap',
	variable: '--sf-pro-d400',
})

export const sfProDisplay600 = localFont({
	src: './files/SFProDisplay-Semibold.woff',
	display: 'swap',
	variable: '--sf-pro-d600',
})

export const sfProDisplay700 = localFont({
	src: './files/SFProDisplay-Bold.woff',
	display: 'swap',
	variable: '--sf-pro-d700',
})

export const sfProText400 = localFont({
	src: './files/SFProText-Regular.woff',
	display: 'swap',
	variable: '--sf-pro-t700',
})