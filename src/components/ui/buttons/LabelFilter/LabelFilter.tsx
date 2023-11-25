'use client'

import Image from 'next/image'

type PropsType = {
	title: string
	variant?: 'clear' | 'label'
	onClick: () => void
}

export default function LabelFilter({
	title,
	variant = 'label',
	onClick,
}: PropsType) {
	return (
		<>
			{variant === 'clear' ? (
				<button
					className='border border-solid border-[#CACDD8] rounded-[2px] bg-white px-[18px] py-[10px] flex shrink-0 grow-0 items-center w-max mr-[9px] md:mr-[0] mb-[9px] md:mb-[16px] text-[12px] md:text-[14px] font-medium hover:bg-slate-100 h-[40px] order-1 md:-order-none'
					onClick={onClick}
				>
					{title}
				</button>
			) : (
				<li className='border border-solid border-[#CACDD8] rounded-[2px] bg-white px-[6px] md:px-[10px] py-[9px] md:py-[9px] flex items-center w-max mr-[9px] md:mr-[16px] last:mr-0 mb-[9px] md:mb-[16px] order-2 md:-order-none'>
					<p className='text-[12px] md:text-[14px] mr-[9px] font-medium'>
						{title}
					</p>
					<button
						onClick={onClick}
						className='block hover:opacity-[0.8] w-[18px] h-[18px] md:w-[20px] md:h-[20px]'
						aria-label='delete filter item'
					>
						<Image
							src={'/icons/close-red.svg'}
							width={20}
							height={20}
							alt='delete'
							className='w-100 h-100'
						/>
					</button>
				</li>
			)}
		</>
	)
}
