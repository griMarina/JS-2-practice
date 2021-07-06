import idGenerator from "../utils/idGenerator.js";
import Product from "./Product.js";

export default class CartProduct {
    constructor({ title, price, discount, quantity }) {
        this._id = idGenerator();
        this.title = title;
        this._price = price;
        this._discount = discount;
        this.quantity = quantity;
    }
}