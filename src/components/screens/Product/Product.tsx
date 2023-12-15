import { ILink } from '../../../models/models';
import { IProductAttributes } from '../../../redux/catalog/catalog.types';
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs';
import OverviewProduct from './OverviewProduct/OverviewProduct';
import './Product.scss';
import { API } from '../../../api';
import type { IRootSingleProduct } from '../../../redux/catalog/catalog.types';

export const getData = async (id: string | number): Promise<IProductAttributes> => {
	const res = await fetch(`${API}/products/${id}?populate=*`, {
		// next: {
		// 	revalidate: 1,
		// },
		cache: 'no-cache',
	});

	if (!res.ok) {
		throw new Error('Failed to fetching data');
	}

	const data: IRootSingleProduct = await res.json();

	return data.data.attributes;
};

export default async function Product({ id }: { id: string }) {
	const data: IProductAttributes = await getData(id);
	const breadcrumbs: ILink[] = [
		{
			title: data.category.data.attributes.title,
			path: `/catalog/${data.category.data.attributes.type}`,
		},
		{
			title: data.title,
			path: ''
		}
	];

	return (
		<div className='product'>
			<Breadcrumbs links={breadcrumbs} />
			<OverviewProduct data={data} />
		</div>
	);
}
