import Image from 'next/image'
import './RemoveBtn.scss'
import { useActions } from '../../../../hooks/useAction'

interface PropsType {
	className: string
	id: string | number
}
export default function RemoveBtn({ id, ...props }: PropsType) {
	const { removeFromCart } = useActions()
	return (
		<button
			{...props}
			type='button'
			onClick={e => {
				e.stopPropagation()
				e.nativeEvent.stopImmediatePropagation()
				removeFromCart(id)
			}}
		>
			<Image
				src={'/icons/del_cart-item.svg'}
				width={21}
				height={21}
				alt='Delete from cart'
			/>
		</button>
	)
}
