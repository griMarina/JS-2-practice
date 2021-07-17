import eventEmitter from "./helpers/eventEmitter.js";
import Cart from "./model/Cart.js";
import Showcase from "./model/Showcase.js";
import ProductInCart from "./model/ProductInCart.js";
import CardView from "./view/CardView.js";
import CartBtnView from "./view/CartBtnView.js";

export default {
    _eventEmitter: eventEmitter,
    _showcaseModel: new Showcase(),
    _cartModel: new Cart(),

    init() {
        this._eventEmitter.addListener('added', this._renderCart.bind(this));
        this._eventEmitter.addListener('removed', this._renderCart.bind(this));
        this._eventEmitter.addListener('loaded', this._renderCart.bind(this));
        this._eventEmitter.addListener('loaded', this._renderShowcase.bind(this));

        // this._cartModel.load();
        this._showcaseModel.load();

    },

    // создаем новый товар на основе класса ProductInCart добавляем его в this._cartModel
    _addToCart(id) {
        const product = new ProductInCart(this._showcaseModel.get(id));
        this._cartModel.add(product);
    },

    _removeFromCart(id) {
        this._cartModel.remove(id);
    },

    _renderCart() {
        const $header = document.querySelector('.header-right');
        document.querySelector('.cart-link').remove();
        new CartBtnView(this._cartModel.getCount()).render($header, 'beforeend');
    },

    // для каждого элемента создаем карточку товара для витрины, отрисовываем карточку в заранее найденном DOM-элементе. Устанавливаем на карточку обработчик события addToCart
    _renderShowcase() {
        const $productCards = document.querySelector('.products__cards');
        $productCards.textContent = '';

        this._showcaseModel.getAll().forEach(
            product => {
                const card = new CardView(product);
                card.render($productCards, 'beforeend');
                card.setAddHandler(this._addToCart.bind(this));
            }
        )
    }
}