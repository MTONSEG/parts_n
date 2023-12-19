import Image from 'next/image';
import './StatusProductCategory.scss';

interface PropsType {
	quantity: number;
	className?: string;
}

export default function StatusProductCategory({ quantity, className }: PropsType) {
	return (
		<div className={`item-catalog__status-wrap ${className ? className : ''}`}>
			{quantity >= 5 && (
				<div className='item-catalog__status item-catalog__status_sale'>
					<Image
						src='/icons/catalog/inSale.svg'
						alt=''
						width={24}
						height={24}
						className='item-catalog__status-icon'
					/>
					<p className='item-catalog__status-text' style={{ color: '#3DC964' }}>
						В наличии
					</p>
				</div>
			)}
			{quantity < 5 && quantity > 0 && (
				<div className='item-catalog__status  item-catalog__status_ends'>
					<Image
						src='/icons/catalog/Ends.svg'
						alt=''
						width={24}
						height={24}
						className='item-catalog__status-icon'
					/>
					<p className='item-catalog__status-text' style={{ color: '#F3A32A' }}>
						Заканчивается
					</p>
				</div>
			)}
			{quantity <= 0 && (
				<div className='item-catalog__status item-catalog__status_ended'>
					<Image
						src='/icons/catalog/outSale.svg'
						alt=''
						width={24}
						height={24}
						className='item-catalog__status-icon'
					/>
					<p className='item-catalog__status-text' style={{ color: '#FF5A5A' }}>
						Нет в наличии
					</p>
				</div>
			)}
		</div>
	);
}
