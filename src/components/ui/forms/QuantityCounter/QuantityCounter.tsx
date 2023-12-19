import { useActions } from '../../../../hooks/useAction';
import './QuantityCounter.scss';

export default function QuantityCounter({
	value,
	incrementHandler,
	decrementHandler,
}: {
	value: number;
	incrementHandler: () => void;
	decrementHandler: () => void;
}) {
	return (
		<div className='quantity-from'>
			<p className='quantity-from__value'>{value}</p>
			<div className='quantity-from__buttons'>
				<button
					className='quantity-from__btn quantity-from__btn_increment'
					onClick={incrementHandler}
				>
					<span></span>
				</button>
				<button
					className='quantity-from__btn quantity-from__btn_decrement'
					onClick={decrementHandler}
				>
					<span></span>
				</button>
			</div>
		</div>
	);
}
