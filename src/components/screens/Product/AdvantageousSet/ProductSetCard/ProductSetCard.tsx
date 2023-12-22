import Image from 'next/image';
import './ProductSetCard.scss';
import { ProductImagesAttributes } from '../../../../../redux/catalog/catalog.types';

interface PropsType {
	image: ProductImagesAttributes;
	title: string;
	price: number;
}

export function ProductSetCard({ image, title, price }: PropsType) {
	return (
		<div className='set-card'>
			<div className='set-card__image-wrap'>
				<Image
					src={image.url}
					width={image.width}
					height={image.height}
					alt={image.name}
					className='set-card__image'
				/>
			</div>
			<div className='set-card__body'>
				<h3 className='set-card__title'>
					<span>{title}</span>
				</h3>
				<p className='set-card__price'>{price} грн</p>
			</div>
		</div>
	);
}
