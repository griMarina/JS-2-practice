import ProductList from "./ProductList.js";
import dataHandler from "../helpers/dataHandler.js";
import Product from "./Product.js";

// класс витрина
export default class Showcase extends ProductList {
    constructor() {
        super();
    }

    // вызываем метод load в классе родителя ProductList
    load() {
        super.load(dataHandler.getCatalog.bind(dataHandler), Product);
    }

}