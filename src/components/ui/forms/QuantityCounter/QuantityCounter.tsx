import { useActions } from '../../../../hooks/useAction'
import './QuantityCounter.scss'

export default function QuantityCounter({
	id,
	value,
}: {
	id: string | number
	value: number
}) {
	const { incrementQuantity, decrementQuantity } = useActions()

	return (
		<div className='quantity-from'>
			<p className='quantity-from__value'>{value}</p>
			<div className='quantity-from__buttons'>
				<button
					className='quantity-from__btn quantity-from__btn_increment'
					onClick={() => {
						incrementQuantity(id)
					}}
				>
					<span></span>
				</button>
				<button
					className='quantity-from__btn quantity-from__btn_decrement'
					onClick={() => {
						decrementQuantity(id)
					}}
				>
					<span></span>
				</button>
			</div>
		</div>
	)
}
