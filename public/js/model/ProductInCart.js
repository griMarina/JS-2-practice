import Product from "./Product.js";

export default class ProductInCart extends Product {
    // принимает объект товара из класса Product и количество по умолчанию = 1
    constructor(productData, quantity = 1) {
        super(productData);

        this._quantity = quantity;
    }

    get price() { return this._price * this._quantity }
    get quantity() { return this._quantity }

    add() { this._quantity++ }

    // удаление всего объекта из корзины
    remove() {
        this._quantity--;
    }

}