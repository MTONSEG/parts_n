import { IProduct } from '../catalog/catalog.types';

export interface ICartStateType {
	cartList: IProduct[],
	open: boolean,
	title: string
}
