import Image from 'next/image'
import './StatusProductCategory.scss'

interface PropsType {
	quantity: number
}

export default function StatusProductCategory({ quantity }: PropsType) {
	return (
		<>
			{quantity >= 5 && (
				<div className='item-catalog__status'>
					<Image
						src='/icons/catalog/inSale.svg'
						alt=''
						width={24}
						height={24}
						className='item-catalog__status-icon'
					/>
					<p
						className='item-catalog__status-text'
						style={{ color: '#3DC964' }}
					>
						В наличии
					</p>
				</div>
			)}
			{quantity < 5 && quantity > 0 && (
				<div className='item-catalog__status'>
					<Image
						src='/icons/catalog/Ends.svg'
						alt=''
						width={24}
						height={24}
						className='item-catalog__status-icon'
					/>
					<p
						className='item-catalog__status-text'
						style={{ color: '#F3A32A' }}
					>
						Заканчивается
					</p>
				</div>
			)}
			{quantity <= 0 && (
				<div className='item-catalog__status'>
					<Image
						src='/icons/catalog/outSale.svg'
						alt=''
						width={24}
						height={24}
						className='item-catalog__status-icon'
					/>
					<p
						className='item-catalog__status-text'
						style={{ color: '#FF5A5A' }}
					>
						Нет в наличии
					</p>
				</div>
			)}
		</>
	)
}
