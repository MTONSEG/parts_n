import { useState } from 'react'

interface PropsType  {
	defaultValue?: number
}

export default function useQuantity({ defaultValue = 1 }: PropsType = {}) {
	const [value, setValue] = useState<number>(defaultValue)

	const increment = () => {
		setValue(value + 1)
	}

	const decrement = () => {
		setValue(() => (value > 1 ? value - 1 : 1))
	}

	return {
		value,
		setValue,
		increment,
		decrement,
	}
}
