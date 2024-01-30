import { Metadata } from 'next';
import Product from '../../../components/screens/Product/Product';
import { getProduct } from '../../../components/screens/Product/product.api';
import { IProductAttributes } from '../../../redux/catalog/catalog.types';

type PropsType = {
	params: { id: string };
};

export async function generateMetadata({ params }: PropsType): Promise<Metadata> {
	const data: IProductAttributes = (await getProduct(params.id)).attributes;

	return {
		title: data.title,
	};
}

export default function ProductPage({ params }: PropsType) {
	return <Product id={params.id} />;
}
