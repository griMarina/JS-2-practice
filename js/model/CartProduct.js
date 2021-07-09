import Product from "./Product.js";

// export default class CartProduct {
//     constructor({ title, price, discount, quantity }) {
//         this._id = idGenerator();
//         this.title = title;
//         this._price = price;
//         this._discount = discount;
//         this.quantity = quantity;
//     }
// }

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