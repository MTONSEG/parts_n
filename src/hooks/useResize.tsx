import { useEffect, useState } from 'react'

const useResize = () => {
	const [size, setSize] = useState<number[]>([1000, 1000])
	
	useEffect(() => {
		const getSize = () => setSize([window.innerWidth, window.innerHeight])
		getSize()
		window.addEventListener('resize', getSize)
		return () => window.removeEventListener('resize', getSize)
	}, [])

	return size
}

export default useResize
