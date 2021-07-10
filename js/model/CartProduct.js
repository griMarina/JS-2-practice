import Product from "./Product.js";

export default class CartProduct extends Product {
    constructor(data, quantity = 1) {
        super(data);

        this.quantity = quantity;
    }

    get price() {
        return this._price * this.quantity;
    }

    add() {
        this.quantity++;
    }
}