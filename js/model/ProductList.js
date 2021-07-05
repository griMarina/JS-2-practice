import Product from "./Product.js";

export default class ProductList {
    constructor(products) {
        this.products = products.map(item => new Product(item));
    }

    get() {
        return this.products;
    }

    add(product) {
        this.products.push(product);
    }

    remove(id) {
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
    }
}