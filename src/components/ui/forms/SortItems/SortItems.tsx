import { MouseEventHandler, useState } from 'react'
import './SortItems.scss'
import { upperFirstLetter } from '../../../../utils/upperFirstLetter'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import { useActions } from '../../../../hooks/useAction'

export default function SortItems() {
	const { viewSort } = useAppSelector(state => state.product)
	const { setSortView } = useActions()
	const [isOpen, setOpen] = useState<boolean>(false)
	const handleMouseMove = (): void => {
		if (!isOpen) {
			setOpen(true)
		}
	}
	const handleMouseLeave = (): void => {
		if (isOpen) {
			setOpen(false)
		}
	}
	const handleClickItem = (id: string | number): void => {
		setOpen(false)
		setSortView({id})
	}
	return (
		<div className={`sort-items ${isOpen ? 'open' : ''}`}>
			<p className='sort-items__label'>Cортировать:</p>
			<div
				className='sort-items__select'
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				<p className='sort-items__current'>{upperFirstLetter(viewSort.currentItem.label)}</p>
				<ul className='sort-items__list'>
					{viewSort?.items.map(item => (
						<li
							className={`sort-items__item ${
								item.selected ? 'selected' : ''
							}`}
							key={item.id}
							onClick={() => {
								handleClickItem(String(item.id))
							}}
						>
							{upperFirstLetter(String(item.label))}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
