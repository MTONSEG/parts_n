import { useActions } from '../../../../../../hooks/useAction'
import { useAppSelector } from '../../../../../../hooks/useTypedRedux'
import { SaleSort } from '../../../../../../redux/catalog/catalog.types'
import { Button } from '../../../../../ui/buttons/Button/Button'

export default function ButtonsSortCatalog() {
	const { sortButtons } = useAppSelector(state => state.product)
	const { setSaleSort } = useActions()

	const handleClick = (value: SaleSort) => {
		setSaleSort(value)
	}

	return (
		<div className='hidden lg:flex mr-[30px]'>
			{sortButtons?.map(btn => (
				<Button
					variant='square'
					className={`mr-[10px] lg:mr-[22px] last:mr-0 ${
						btn.selected ? 'active' : 'selected'
					}`}
					key={btn.id}
					onClick={() => {
						handleClick(btn.value)
					}}
				>
					{btn.label}
				</Button>
			))}
		</div>
	)
}
