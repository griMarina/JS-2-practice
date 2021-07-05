import idGenerator from "../utils/idGenerator.js";

export default class {
    constructor({ title, img, desc, price, discount }) {
        this._id = idGenerator();
        this.title = title;
        this.img = img;
        this.desc = desc;
        this._price = price;
        this._discount = discount;
    }

    getPrice() {
        return this._price - this._discount;
    }
}