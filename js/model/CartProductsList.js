import CartProduct from "./CartProduct.js";

export default class CardProductsList {
    constructor(cartProducts) {
        this.cartProducts = cartProducts.map(item => new CartProduct(item));
    }

    get() {
        return this.cartProducts;
    }

    getQuantity()

}