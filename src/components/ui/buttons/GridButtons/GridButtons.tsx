'use client'

import LineGridIcon from '@/icons/line-grid.svg'
import CubeGridIcon from '@/icons/cube-grid.svg'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import { useActions } from '../../../../hooks/useAction'
import './GridButtons.scss'

export default function GridButtons() {
	const grid = useAppSelector(state => state.product.grid)
	const { toggleGrid } = useActions()

	const handleClick = () => {
		toggleGrid()
	}

	return (
		<div className='grid-buttons'>
			<button
				className={`grid-buttons__btn grid-buttons__btn_line ${
					grid ? '' : 'active'
				}`}
				onClick={handleClick}
			>
				<LineGridIcon />
			</button>
			<button
				className={`grid-buttons__btn grid-buttons__btn_grid ${
					grid ? 'active' : ''
				}`}
				onClick={handleClick}
			>
				<CubeGridIcon />
			</button>
		</div>
	)
}
