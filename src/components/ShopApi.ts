import type { IApi, IOrder, IOrderResult, IProductList } from '../types';

const productsPath = '/product/';
const orderPath = '/order/';

export class ShopApi {
    constructor(private readonly api: IApi) {}

    getProducts(): Promise<IProductList> {
        return this.api.get<IProductList>(productsPath);
    }

    createOrder(order: IOrder): Promise<IOrderResult> {
        return this.api.post<IOrderResult>(orderPath, order);
    }
}
