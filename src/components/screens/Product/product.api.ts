import { API } from '../../../api';
import type { IProductAttributes, IRootSingleProduct } from '../../../redux/catalog/catalog.types';

export const getProduct = async (id: string | number): Promise<IProductAttributes> => {
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
