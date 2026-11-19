import './scss/styles.scss';

import { Api } from './components/base/Api';
import { Basket } from './components/models/Basket';
import { Buyer } from './components/models/Buyer';
import { Products } from './components/models/Products';
import { ShopApi } from './components/ShopApi';
import { API_URL } from './utils/constants';
import { apiProducts } from './utils/data';

const products = new Products();
const basket = new Basket();
const buyer = new Buyer();
const shopApi = new ShopApi(new Api(API_URL));
const [firstProduct, secondProduct] = apiProducts.items;

products.setItems(apiProducts.items);
console.log('Каталог из стартовых данных', products.getItems());
console.log('Товар по идентификатору', products.getItem(firstProduct.id));
products.setSelected(secondProduct);
console.log('Товар для подробного просмотра', products.getSelected());

basket.addItem(firstProduct);
basket.addItem(secondProduct);
console.log('Корзина после добавления товаров', basket.getItems());
console.log('Общая стоимость корзины', basket.getTotal());
console.log('Количество товаров в корзине', basket.getCount());
console.log('Первый товар есть в корзине', basket.hasItem(firstProduct.id));
basket.removeItem(firstProduct);
console.log('Корзина после удаления первого товара', basket.getItems());
basket.clear();
console.log('Корзина после очистки', basket.getItems());

console.log('Ошибки пустых данных покупателя', buyer.validate());
buyer.setData({ payment: 'card', address: 'ул. Пушкина, 10' });
buyer.setData({ email: 'buyer@example.com' });
console.log('Данные покупателя после добавления почты', buyer.getData());
console.log('Ошибки до заполнения телефона', buyer.validate());
buyer.setData({ phone: '+79990000000' });
console.log('Ошибки заполненных данных покупателя', buyer.validate());
buyer.clear();
console.log('Данные покупателя после очистки', buyer.getData());

shopApi.getProducts()
    .then(({ items }) => {
        products.setItems(items);
        console.log('Каталог, сохранённый после запроса к API', products.getItems());
    })
    .catch((error: unknown) => {
        console.error('Не удалось загрузить каталог', error);
    });
