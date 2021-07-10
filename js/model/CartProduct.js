import Product from "./Product.js";

export default class CartProduct extends Product {
    constructor({ title, img, desc, _price, id }, quantity = 1) {
        super({ title, img, desc, price: _price });
        this.id = id;

        this.quantity = quantity;
    }

    get price() {
        return this._price * this.quantity;
    }

    add() {
        this.quantity++;
    }
}