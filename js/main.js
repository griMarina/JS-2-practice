import API from "./API.js";
import ProductsList from "./model/ProductsList.js";
import Card from "./view/card.js";

const productsList = new ProductsList(API.fetch());

const $productCards = document.querySelector('.products__cards');

const $cards = productsList.get().map(product => new Card(product));

$cards.forEach($card => {
    $card.render($productCards)
});

console.log(productsList.getTotalPrice());