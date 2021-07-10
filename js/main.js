import API from "./API.js";
import ProductsList from "./model/ProductsList.js";
import Cart from "./model/Cart.js";
import Card from "./view/card.js";

function addToCart(id) {
    const product = productsList.getById(id);
    cart.add(new CartProduct(prodcut));
}

const productsList = new ProductsList(API.fetch());
const cart = new Cart([]);

const $productCards = document.querySelector('.products__cards');

const cards = productsList.get().map(product => new Card(product));
console.log(cards);

cards.forEach(card => {
    card.render($productCards)
});

