import ProductsList from "./ProductsList.js";

export default class Cart extends ProductsList {
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
            this.products.push(newProduct);
        }
    }

    // отображение количества товаров в корзине
    getHtlm() {
        return `<span>${this.getQuantity()}</span>`;
    }

    render($container, target = 'beforeend') {
        $container.lastChild.remove();
        $container.insertAdjacentHTML(target, this.getHtlm());
    }
}