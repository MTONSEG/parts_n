import type { ILink } from '../../../models/models';
import type { IProduct } from '../../../redux/catalog/catalog.types';
import { Breadcrumbs } from '../../common/Breadcrumbs/Breadcrumbs';
import AdvantageousSet from './AdvantageousSet/AdvantageousSet';
import InfoProduct from './InfoProduct/InfoProduct';
import OverviewProduct from './OverviewProduct/OverviewProduct';
import './Product.scss';
import SpecificationsProduct from './SpecificationsProduct/SpecificationsProduct';
import ViewedProducts from './ViewedProducts/ViewedProducts';
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
			<AdvantageousSet product={data.attributes} />
			<InfoProduct description={data.attributes.description} />
			<SpecificationsProduct />
			<ViewedProducts />
		</div>
	);
}
