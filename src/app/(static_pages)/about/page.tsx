import type { Metadata } from 'next'
import About from '../../../components/pages/About/About'

export const metadata: Metadata = {
	title: 'About page | NOUT PARTS',
}

export default function AboutPage() {
	return <About/>
}
