export default class Product {
    constructor({ id, product_name: title, product_desc: description, image, price }) {
        this._id = id;
        this._title = title;
        this._desc = description;
        this._image = image;
        this._price = price;
    }
    get id() { return this._id }
    get title() { return this._title }
    get description() { return this._desc }
    get image() { return this._image }
    get price() { return this._price }

}