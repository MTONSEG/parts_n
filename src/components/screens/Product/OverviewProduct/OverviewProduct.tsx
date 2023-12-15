'use client';

import type { IProductAttributes } from '../../../../redux/catalog/catalog.types';
import DetailsProduct from './DetailsProduct/DetailsProduct';
import ImageSliderProduct from './ImageSliderProduct/ImageSliderProduct';
import './OverviewProduct.scss';

type PropsType = {
	data: IProductAttributes;
};

export default function OverviewProduct({ data }: PropsType) {
	return (
		<div className='overview-product'>
			<div className='container'>
				<div className='overview-product__row'>
					<ImageSliderProduct images={data.images.data} />
					<DetailsProduct data={data} />
				</div>
			</div>
		</div>
	);
}
