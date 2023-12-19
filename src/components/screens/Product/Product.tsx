import type { ILink } from '../../../models/models';
import type { IProduct } from '../../../redux/catalog/catalog.types';
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs';
import OverviewProduct from './OverviewProduct/OverviewProduct';
import './Product.scss';
import { getProduct } from './product.api';

export default async function Product({ id }: { id: string }) {
	const data: IProduct = await getProduct(id);
	const breadcrumbs: ILink[] = [
		{
			title: data.attributes.category.data.attributes.title,
			path: `/catalog/${data.attributes.category.data.attributes.type}`,
		},
		{
			title: data.attributes.title,
			path: '',
		},
	];

	return (
		<div className='product'>
			<Breadcrumbs links={breadcrumbs} />
			<OverviewProduct data={data} />
		</div>
	);
}
