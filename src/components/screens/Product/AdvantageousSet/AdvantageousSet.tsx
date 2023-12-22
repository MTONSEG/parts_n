import Image from 'next/image';
import { IProductAttributes } from '../../../../redux/catalog/catalog.types';
import './AdvantageousSet.scss';
import { PriceSetCard } from './ProductSetCard/PriceSetCard';
import { ProductSetCard } from './ProductSetCard/ProductSetCard';

interface PropsType {
	product: IProductAttributes;
}

export default function AdvantageousSet({ product }: PropsType) {
	return (
		<section className='adv-set'>
			<div className='container'>
				<h2 className='adv-set__title'>Выгодный комплект</h2>

				<div className='adv-set__row'>
					<ProductSetCard
						image={product.images.data[0].attributes}
						title={product.title}
						price={product.price ? product.price : 0}
					/>

					<div className='adv-set__plus'></div>

					<ProductSetCard
						image={product.images.data[0].attributes}
						title={product.title}
						price={product.price ? product.price : 0}
					/>

					<div className='adv-set__equal'></div>

					<PriceSetCard />
				</div>

				<Image
					src='/images/product/bg-image.svg'
					width={134}
					height={134}
					alt='Saving'
					className='adv-set__image-bg adv-set__image-bg_left'
				/>

				<Image
					src='/images/product/bg-image.svg'
					width={134}
					height={134}
					alt='Saving'
					className='adv-set__image-bg adv-set__image-bg_right'
				/>
			</div>
		</section>
	);
}
