import API from "./API.js";
import ProductsList from "./model/ProductsList.js";
import CartProduct from "./model/CartProduct.js";
import Cart from "./model/Cart.js";
import Card from "./view/card.js";
import MakeGetRequest from "./MakeGetRequest.js";

function addToCart(id) {
    const product = productsList.getById(id);
    cart.add(new CartProduct(product));
    cart.render($cart); // количество товаров в корзине
}

const productsList = new ProductsList(API.fetch());
const cart = new Cart([]);


const $productCards = document.querySelector('.products__cards');
const $cart = document.querySelector('.cart-link');

const cards = productsList.get().map(product => new Card(product));

cards.forEach(card => {
    card.setAddHandler(addToCart);
    card.render($productCards);
});



// Домашнее задание № 3 
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

console.log(MakeGetRequest('GET', `${API_URL}/catalogData.json`));