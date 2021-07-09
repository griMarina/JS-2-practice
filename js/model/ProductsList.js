import Product from "./Product.js";

export default class ProductsList {
    constructor(products) {
        this.products = products.map(item => new Product(item));
    }

    get() {
        return this.products;
    }

    getById(id) {
        return this.products.find(product.id === id);
    }

    getQuantity() {
        return this.products.reduce((acc, product) => acc + product.quantity, 0);
    }

    add(product) {
        this.products.push(product);
    }

    remove(id) {
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
    }
}