import { IProduct } from '../catalog/catalog.types';

export interface ICartStateType {
	cartList: IProduct[],
	removeList: IProduct[]
	openMenu: boolean,
	title: string
}
