import type { IProduct } from '../../types';

export class Products {
    private items: IProduct[] = [];
    private selected: IProduct | null = null;

    setItems(items: IProduct[]): void {
        this.items = [...items];
    }

    getItems(): IProduct[] {
        return [...this.items];
    }

    getItem(id: IProduct['id']): IProduct | undefined {
        return this.items.find((product) => product.id === id);
    }

    setSelected(product: IProduct): void {
        this.selected = product;
    }

    getSelected(): IProduct | null {
        return this.selected;
    }
}
