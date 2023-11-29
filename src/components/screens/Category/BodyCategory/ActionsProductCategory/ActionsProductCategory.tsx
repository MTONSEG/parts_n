import { useActions } from '../../../../../hooks/useAction'
import { useAppSelector } from '../../../../../hooks/useTypedRedux'
import GridButtons from '../../../../ui/buttons/GridButtons/GridButtons'
import LabelFilter from '../../../../ui/buttons/LabelFilter/LabelFilter'
import SortItems from '../../../../ui/forms/SortItems/SortItems'
import './ActionsProductCategory.scss'
import ButtonsSortCatalog from './ButtonsSortCatalog/ButtonSortCatalog'
import DeviceSelects from './DeviceSelects/DeviceSelects'

export default function ActionsProductCategory() {
	const { currentProducts } = useAppSelector(state => state.product)
	const {clearSort} = useActions()

	return (
		<div className='actions-catalog mb-[19px] md:mb-[13px]'>
			<div className=''>
				{/* <DeviceSelects /> */}
				<div className='flex justify-between flex-wrap-reverse items-center mb-[20px]'>
					<ButtonsSortCatalog />
					<SortItems />
				</div>
			</div>
			<div className='flex items-start justify-between'>
				<ul className='actions-catalog__labels flex md:flex-wrap overflow-auto md:overflow-visible px-[16px] mx-[-16px] md:px-0 md:mx-0'>
					<LabelFilter title='asus' onClick={() => {}} />
					<LabelFilter title='asus' onClick={() => {}} />
					<LabelFilter title='asus' onClick={() => {}} />
					<LabelFilter
						title='Clear all'
						variant='clear'
						onClick={clearSort}
					/>
				</ul>
			</div>
			<div className='flex items-center justify-between'>
				<p className='text-[14px] leading-[2.1]'>
					<span className='font-bold inline-block mr-1'>
						{currentProducts?.length}
					</span>
					<span className='font-medium text-[#A1A1A1]'>товаров</span>
				</p>
				<GridButtons />
			</div>
		</div>
	)
}
