import Product from '../../../components/screens/Product/Product';

type PropsType = {
	params: { id: string };
};

export default function ProductPage({ params }: PropsType) {
	return <Product id={params.id} />;
}
