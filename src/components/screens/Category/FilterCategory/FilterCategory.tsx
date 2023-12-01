'use client'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import './FilterCategory.scss'

export default function FilterCategory({ category }: { category: string }) {
	const { filterInfo, filterList, status } = useAppSelector(
		state => state.product
	)

	if (status === 'loading') return null

	return (
		<div className='hidden md:block absolute md:static md:flex-[0_0_240px] lg:flex-[0_0_282px] md:pt-[22px] md:px-[27px] md:pb-[56px] md:pb  border border-solid border-[#DEDEDE]'>
			<h2 className='md: mb-[22px] text-[24px] font-bold tracking-[0.2px]'>
				Фильтр
			</h2>

			{filterInfo[category]?.map(item => (
				<div className='' key={item.id}>
					<h3 className='md:text-[18px] text-[#19191D] font-medium leading-[1.5] tracking-[0.5px]'>
						{item.title}
					</h3>
					<h4 className='md:text-[#787885] leading-[1.4] tracking-[0.3px] md:mb-[14px]'>
						{item.subtitle}
					</h4>
					<ul>
						{filterList[category][item.value]?.map(el => (
							<li key={el.id}>
								{`${el.label} (${el.qty})`}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
