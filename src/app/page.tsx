import Link from 'next/link'
import NavPanel from '@/components/common/NavPanel/NavPanel'

export default function Home() {
	return (
		<>
			<NavPanel />
			<Link href='/product'>product</Link>
			<Link href='/about'>about</Link>
		</>
	)
}
