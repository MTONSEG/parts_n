import { IProduct } from '../catalog/catalog.types';

export interface ICartStateType {
	cartList: IProduct[],
	openMenu: boolean,
	title: string
}
