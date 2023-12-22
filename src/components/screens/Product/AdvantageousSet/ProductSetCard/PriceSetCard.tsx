import Image from 'next/image';
import './ProductSetCard.scss';
import { ProductImagesAttributes } from '../../../../../redux/catalog/catalog.types';
import { Button } from '../../../../ui/buttons/Button/Button';

interface PropsType {}

export function PriceSetCard({}: PropsType) {
	return (
		<div className='price-set'>
			<div className='price-set__top'>
				<div className='price-set__label'>
					<Image
						src='/images/product/saving.svg'
						width={196}
						height={95}
						alt='Saving'
						className='price-set__label-image'
					/>

					<span>-10%</span>
				</div>

				<div className='price-set__price'>
					<p className='price-set__old-price'>1700 грн</p>
					<p className='price-set__current-price'>1530 грн</p>
				</div>
			</div>

			<div className='price-set__bottom'>
				<p className='price-set__saving'>Экономия 10%</p>
				<p className='price-set__benefit'>Выгода 170 ₴</p>

				<Button className='price-set__btn'>Купить комплект</Button>
			</div>
		</div>
	);
}
