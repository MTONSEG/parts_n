import { useAppSelector } from '../../../../../../hooks/useTypedRedux'
import {
	ProductInfo,
} from '../../../../../../redux/catalog/catalog.types'
import './InfoProductCategory.scss'

interface PropsType {
	data: ProductInfo
	variant: string
}

export default function InfoProductCategory({
	data,
	variant,
}: PropsType) {
	const { info } = useAppSelector(state => state.product)

	const formatMemory = (memory: number): string => {
		return memory < 1000 ? `${memory} GB` : `${(memory / 1000).toFixed()} TB`
	}
	return (
		<>
			<ul className='item-catalog__info-items'>
				{variant === 'batteries' &&
					info[variant]?.map(el => (
						<li className='item-catalog__info-item' key={el.id}>
							<span className='item-catalog__info-item-title'>
								{el.title}
							</span>
							<span className='item-catalog__info-item-value'>
								{`${data[el.value]} ${el.unit}`}
							</span>
						</li>
					))}

				{variant === 'matrices' &&
					info[variant]?.map(el => (
						<li className='item-catalog__info-item' key={el.id}>
							<span className='item-catalog__info-item-title'>
								{el.title}
							</span>
							<span className='item-catalog__info-item-value'>
								{`${data[el.value]} ${el.unit}`}
							</span>
						</li>
					))}

				{variant === 'powers' &&
					info[variant]?.map(el => (
						<li className='item-catalog__info-item' key={el.id}>
							<span className='item-catalog__info-item-title'>
								{el.title}
							</span>
							<span className='item-catalog__info-item-value'>
								{`${data[el.value]} ${el.unit}`}
							</span>
						</li>
					))}

				{variant === 'keyboards' &&
					info[variant]?.map(el => (
						<li className='item-catalog__info-item' key={el.id}>
							<span className='item-catalog__info-item-title'>
								{el.title}
							</span>
							<span className='item-catalog__info-item-value'>
								{`${data[el.value]} ${el.unit}`}
							</span>
						</li>
					))}

				{variant === 'storages' &&
					info[variant]?.map(el => (
						<li className='item-catalog__info-item' key={el.id}>
							<span className='item-catalog__info-item-title'>
								{el.title}
							</span>
							<span className='item-catalog__info-item-value'>
								{el.value === 'memory'
									? formatMemory(Number(data[el.value]))
									: data[el.value]}
							</span>
						</li>
					))}
				{variant === 'rams' &&
					info[variant]?.map(el => (
						<li className='item-catalog__info-item' key={el.id}>
							<span className='item-catalog__info-item-title'>
								{el.title}
							</span>
							<span className='item-catalog__info-item-value'>
								{el.value === 'memory'
									? formatMemory(Number(data[el.value]))
									: `${data[el.value]} ${el.unit}`}
							</span>
						</li>
					))}
			</ul>
		</>
	)
}
