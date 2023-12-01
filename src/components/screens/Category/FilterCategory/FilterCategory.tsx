'use client'
import Image from 'next/image'
import { useActions } from '../../../../hooks/useAction'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './FilterCategory.scss'
import { getUnit } from '../../../../utils/getUnit'


export default function FilterCategory({ category }: { category: string }) {
	const { filterInfo, filterList, status } = useAppSelector(
		state => state.product
	)
	const { toggleItemToFilter } = useActions()

	const handleItemClick = (
		category: string,
		subcategory: string,
		id: string | number | undefined
	) => {
		toggleItemToFilter({ category, subcategory, id })
	}

	if (status === 'loading') return null

	return (
		<div className='hidden md:block absolute md:static md:flex-[0_0_240px] lg:flex-[0_0_282px] md:pt-[22px] md:px-[27px] md:pb-[56px] md:pb  border border-solid border-[#DEDEDE]'>
			<h2 className='md: mb-[22px] text-[24px] font-bold tracking-[0.2px]'>
				Фильтр
			</h2>

			{filterInfo[category]?.map(item => (
				<div
					className='mb-[19px] pb-[19px] border-b-[1px] border-solid border-[#ECECEC] last:border-0 last:mb-0 last:pb-0'
					key={item.id}
				>
					<h3 className='md:text-[18px] text-[#19191D] font-medium leading-[1.5] tracking-[0.5px]'>
						{item.title}
					</h3>
					<h4 className='md:text-[#787885] leading-[1.4] tracking-[0.3px] md:mb-[14px]'>
						{item.subtitle}
					</h4>
					<ul className=''>
						{filterList[category][item.value]?.map(el => (
							<li
								className={`leading-[2] relative mb-[4px] px-[4px] cursor-pointer ${
									el.selected ? 'bg-[#EBFFED]' : ''
								}`}
								key={el.id}
								onClick={() => {
									handleItemClick(category, item.value, el.id)
								}}
							>
								<span className=''>
									{`${el.label} ${getUnit(item.value)}`}
								</span>
								<span className='inline-block ml-[4px] text-[#717171]'>
									({el.qty})
								</span>
								<button
									className={` items-center justify-center w-[16px] h-[16px] hover:opacity-50 absolute right-[5px] top-[50%] translate-y-[-50%] ${
										el.selected ? 'flex' : 'hidden'
									}`}
									aria-label='toggle filter item'
								>
									<Image
										src={'/icons/catalog/close.svg'}
										width={8}
										height={8}
										alt='unpin'
									/>
								</button>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
