import eventEmitter from "../helpers/eventEmitter.js";

export default class ProductList {
    constructor() {
        this._productList = [];
        this._eventEmitter = eventEmitter;
    }

    // в параметр принимаем функцию, которая возвращает данные c сервера в виде массива из объектов, на основе которых создаем новый класс Product или ProductList, и массив этих товаров записываем в _productList.
    load(callback, productClass) {
        callback().then(data => {
            this._productList = data.map(item => new productClass(item));
            this._eventEmitter.emit('loaded');
        });
    }

    add(product) {
        this._productList.push(product);
    }

    get(id) {
        return this._productList.find(product => product.id === id);
    }

    getAll() {
        return this._productList;
    }

    // получаем новый отфильтрованный массив и перезаписываем _productList
    remove(id) {
        this._productList = this._productList.filter(product => product.id !== id);
    }
}