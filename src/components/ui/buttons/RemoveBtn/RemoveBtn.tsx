import Image from 'next/image'
import './RemoveBtn.scss'
import { useActions } from '../../../../hooks/useAction'

interface PropsType {
	className: string
	id: string | number
	title?: string
	handleRemove: (id: string | number) => void
}
export default function RemoveBtn({
	id,
	title,
	handleRemove,
	...props
}: PropsType) {
	const { removeFromCart } = useActions()
	return (
		<button
			{...props}
			type='button'
			onClick={e => {
				e.stopPropagation()
				e.nativeEvent.stopImmediatePropagation()
				handleRemove ? handleRemove(id) : removeFromCart(id)
			}}
		>
			<Image
				src={'/icons/del_cart-item.svg'}
				width={21}
				height={21}
				alt='Delete from cart'
			/>
			<span>{title && title}</span>
		</button>
	)
}
