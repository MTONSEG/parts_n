'use client'
import Image from 'next/image'
import { useActions } from '../../../../hooks/useAction'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './FilterCategory.scss'
import { getUnit } from '../../../../utils/getUnit'
import { Button } from '../../../ui/buttons/Button/Button'
import { useState } from 'react'

export default function FilterCategory({ category }: { category: string }) {
	const { filterInfo, filterList, status, activeFilter } = useAppSelector(
		state => state.product
	)
	const { toggleItemToFilter, clearSort, toggleFilter } = useActions()
	const [openId, setOpenId] = useState<string | number | null>(null)

	const handleItemClick = (
		category: string,
		subcategory: string,
		id: string | number | undefined
	) => {
		toggleItemToFilter({ category, subcategory, id })
	}

	const handleMenuBtnClick = (): void => {
		toggleFilter()
		console.log(activeFilter)
	}
	const handleCancelBtn = (): void => {
		clearSort()
		toggleFilter()
	}

	const handleBlockOpen = (id: string | number): void => {
		setOpenId(open => (openId === id ? null : id))
	}

	if (status === 'loading') return null

	return (
		<div
			className={`bottom-menu ${
				activeFilter ? 'active' : ''
			} md:block absolute md:static md:flex-[0_0_240px] lg:flex-[0_0_282px] md:pt-[22px] md:px-[27px] md:pb-[56px] md:pb  border border-solid border-[#DEDEDE]`}
		>
			<h2 className='px-[20px] pt-[16px] pb-[13px] text-center md:text-left border-0 border-solid border-b-[1px] border-[#C8C8C8] md:border-0 md:py-0 md:px-0 md:mb-[22px] text-[24px] font-bold tracking-[0.2px]'>
				Фильтр
			</h2>

			{filterInfo[category]?.map(item => (
				<div
					className={`bottom-menu__body ${
						openId === item.id ? 'open' : ''
					} md:mb-[19px] pb-[19px] border-b-[1px] border-solid border-[#ECECEC] last:border-0 md:last:mb-0 md:last:pb-0`}
					key={item.id}
				>
					<div
						className='bottom-menu__head'
						onClick={() => {
							handleBlockOpen(item.id)
						}}
					>
						<h3 className='md:text-[18px] text-[#19191D] font-medium leading-[1.5] tracking-[0.5px]'>
							{item.title}
						</h3>
						<h4 className='md:text-[#787885] leading-[1.4] tracking-[0.3px] md:mb-[14px]'>
							{item.subtitle}
						</h4>
					</div>
					<div className={`bottom-menu__list`}>
						<ul className='min-h-0 w-[100%]'>
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
				</div>
			))}
			<div className='bottom-menu__footer md:hidden'>
				<Button
					className='mr-[20px] w-[100%] justify-center'
					variant='white'
					onClick={handleCancelBtn}
				>
					Отменить
				</Button>
				<Button
					className='w-[100%] justify-center'
					onClick={handleMenuBtnClick}
				>
					Применить
				</Button>
			</div>
		</div>
	)
}
