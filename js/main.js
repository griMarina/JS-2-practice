import API from "./API.js";
import ProductList from "./model/ProductList.js";
import Card from "./view/card.js";

const productList = new ProductList(API.fetch());
console.log(productList.get());

const $productCards = document.querySelector('.products__cards');

const $cards = productList.get().map(product => new Card(product));
console.log($cards);

$cards.forEach($card => {
    $card.render($productCards)
});