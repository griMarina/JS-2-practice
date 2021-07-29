const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();

app.use(express.static('./public'));

app.get('/product', (req, res) => {
    fs.readFile('./data/catalog.json', 'utf-8', (err, data) => {
        res.send(data);
    })
});

app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/addToCart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const product = req.body;

        cart.push(product);

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            res.send('ok');
        });
    });
});

app.post('/change', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        const product = req.body;
        const index = cart.findIndex((item => item.id == product.id));

        cart[index].quantity = product.quantity;

        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            res.send('ok');
        });
    });
});

app.delete('/removeFromCart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        const product = req.body;
        const index = cart.findIndex((item => item.id == product.id));

        cart.splice(index, 1);

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            res.send('ok');
        });
    });
});

app.delete('/clear', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        cart.splice(0, cart.length);

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            res.send('ok');
        });
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});