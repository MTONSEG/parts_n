'use client';

import type { IProduct } from '../../../../redux/catalog/catalog.types';
import StatusProductCategory from '../../Category/BodyCategory/StatusProductCategory/StatusProductCategory';
import DetailsProduct from './DetailsProduct/DetailsProduct';
import ImageSliderProduct from './ImageSliderProduct/ImageSliderProduct';
import './OverviewProduct.scss';

type PropsType = {
	data: IProduct;
};

export default function OverviewProduct({ data }: PropsType) {
	return (
		<div className='overview-product'>
			<div className='container'>
				<div className='overview-product__row'>
					<div className='overview-product__title'>
						<span>{data.attributes.title}</span>
					</div>

					<div className='overview-product__images'>
						<ImageSliderProduct images={data.attributes.images.data} />
					</div>

					<div className='overview-product__codes'>
						<OverviewProductCode variant='model' value={data.attributes.model} />
						<OverviewProductCode variant='code' value={data.attributes.code} />
						<StatusProductCategory
							quantity={data.attributes.quantity}
							className='overview-product__status'
						/>
					</div>

					<div className='overview-product__info'>
						<DetailsProduct product={data} />
					</div>
				</div>
			</div>
		</div>
	);
}

type CodeTypes = {
	variant: 'code' | 'model';
	value: string;
};

function OverviewProductCode({ variant, value }: CodeTypes) {
	return (
		<p className='overview-product__code'>
			<span className='overview-product__code-title'>
				{variant === 'code' && 'Артикул:'}
				{variant === 'model' && 'Модель:'}
			</span>
			<span className='overview-product__code-value'>{value}</span>
		</p>
	);
}
