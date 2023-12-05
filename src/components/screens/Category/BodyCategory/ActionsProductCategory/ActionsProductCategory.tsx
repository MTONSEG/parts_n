import Image from 'next/image'
import { useActions } from '../../../../../hooks/useAction'
import { useAppSelector } from '../../../../../hooks/useTypedRedux'
import { objectFilterToArray } from '../../../../../utils/getFilterItems'
import GridButtons from '../../../../ui/buttons/GridButtons/GridButtons'
import LabelFilter from '../../../../ui/buttons/LabelFilter/LabelFilter'
import SortItems from '../../../../ui/forms/SortItems/SortItems'
import './ActionsProductCategory.scss'
import ButtonsSortCatalog from './ButtonsSortCatalog/ButtonSortCatalog'
import DeviceSelects from './DeviceSelects/DeviceSelects'

export default function ActionsProductCategory() {
	const { currentProducts, filterSelected, activeFilter, activeDevices } =
		useAppSelector(state => state.product)
	const { toggleFilter, toggleDeviceMenu } = useActions()

	const handleFilterBtnClick = (): void => {
		toggleFilter()
	}
	const handleDeviceBtnClick = (): void => {
		toggleDeviceMenu()
	}

	return (
		<div className='actions-catalog mb-[19px] mx-[-16px] md:mx-0  md:mb-[13px]'>
			<div
				className={`menu-inner ${
					activeFilter || activeDevices ? 'active' : ''
				}`}
			></div>
			<div className='flex md:block px-[16px] md:px-0 flex-wrap gap-y-[10px]'>
				<button
					className='flex flex-shrink-0 md:flex-shrink-1 w-[54px] h-[36px] bg-[#F4F4F4] items-center justify-center rounded-[4px] mr-[14px] md:hidden'
					aria-label='filter toggle btn'
					onClick={handleFilterBtnClick}
				>
					<Image src={'/filter.svg'} alt='filter' width={16} height={15} />
				</button>
				<button
					className='hidden relative h-[36px] bg-[#F4F4F4] items-center justify-center mr-[14px] text-[#787885] text-[12px] font-medium tracking-[0.44px] rounded-[4px] pl-[13px] pr-[28px] md:hidden after:block after:w-[7px] after:h-[7px] after:border-[2px] after:border-t-0 after:border-l-0 after:rotate-45 after:border-solid after:border-[#787885] after:absolute after:top-[45%] after:right-[10px] after:translate-y-[-50%]'
					aria-label='filter toggle btn'
					onClick={handleDeviceBtnClick}
				>
					Характеристики
				</button>
				<DeviceSelects />
				<div className='flex justify-between flex-wrap-reverse items-center mb-[10px] md:mb-[20px]'>
					<ButtonsSortCatalog />
					<SortItems />
				</div>
			</div>
			<div className='flex items-start justify-between'>
				<ul className='actions-catalog__labels flex md:flex-wrap overflow-auto md:overflow-visible px-[16px] mx-[-16px] md:px-0 md:mx-0'>
					{objectFilterToArray(filterSelected).map((el, index) => (
						<LabelFilter title={el} key={index} />
					))}
					{objectFilterToArray(filterSelected).length > 0 && (
						<LabelFilter title='Clear all' variant='clear' />
					)}
				</ul>
			</div>
			<div className='flex items-center justify-between px-[16px] md:px-0'>
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
