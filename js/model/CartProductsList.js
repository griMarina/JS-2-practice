import ProductsList from "./ProductsList.js";

// export default class CardProductsList {
//     constructor(cartProducts) {
//         this.cartProducts = cartProducts.map(item => new CartProduct(item));
//     }

//     get() {
//         return this.cartProducts;
//     }

//     getQuantity()
// }

export default class CartProductsList extends ProductsList {
    constructor(productsData) {
        super(productsData);
    }

    getPrice() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }

    add(newProduct) {
        const oldProduct = this.products.find(product => product.id === newProduct.id)
        if (oldProduct) {
            oldProduct.add()
        } else {
            this.products.push(product);
        }
    }
}