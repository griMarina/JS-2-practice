import idGenerator from "../utils/idGenerator.js";

export default class {
    constructor({ title, img, desc, price }) {
        this.id = idGenerator();
        this.title = title;
        this.img = img;
        this.desc = desc;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}