import ProductList from "./ProductList.js";
import dataHandler from "../helpers/dataHandler.js";
import ProductInCart from "./ProductInCart.js";

// класс корзина
export default class Cart extends ProductList {
    constructor() {
        super();
    }

    // вызываем метод load в классе родителя ProductList
    load() {

        super.load(dataHandler.getCart.bind(dataHandler), ProductInCart);
    }

    getCount() {

        return this._productList.reduce((acc, product) => acc + product.quantity, 0)
    }

    // при добавлении товара в корзину проверяем, есть ли в массиве _productList товар с таким же id. Если есть вызываем метод add у товара в корзине, т.е. увеличиваем количество, если такого товара в корзине еще нет, вызываем у родителя ProductList метод add и добавляем этот товар в массив _productList
    add(product) {
        const findProduct = this._productList.find(item => item.id === product.id); // возвращает элемент с одинаковым индексом
        if (findProduct) {
            findProduct.add();
        } else {
            super.add(product);
        }
        this._eventEmitter.emit('added', product.id);
    }

    // проверяем, есть ли в массиве _productList товар с таким же id. Если есть делаем вторую проверку: если количество этого товара > 1, вызываем метод remove у товара в корзине, т.е. уменьшаем количество одного и того же товара. Если товар с таким id один, вызываем у родителя ProductList метод remove и удаляем этот товар полностью из массива _productList
    decrease(id) {
        const findProduct = this._productList.find(item => item.id === id);
        if (findProduct) {
            if (findProduct.quantity > 1) {
                findProduct.remove();
            } else {
                super.remove(id);
            }
        }
        this._eventEmitter.emit('removed', id);
    }
}