import { ILink } from '../../../models/models';
import { IProductAttributes } from '../../../redux/catalog/catalog.types';
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs';
import OverviewProduct from './OverviewProduct/OverviewProduct';
import './Product.scss';
import { getProduct } from './product.api';


export default async function Product({ id }: { id: string }) {
	const data: IProductAttributes = await getProduct(id);
	const breadcrumbs: ILink[] = [
		{
			title: data.category.data.attributes.title,
			path: `/catalog/${data.category.data.attributes.type}`,
		},
		{
			title: data.title,
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
