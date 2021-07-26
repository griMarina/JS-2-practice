const express = require('express');
const fs = require('fs'); // встроенная в node js библиотека, которая работает с файловой системой
const bodyParser = require('body-parser'); // создали bodyParser чтобы правильно раскодировать запрос

const app = express(); // express() возвращает объект, в котором есть все данные и методы для работы сервера. 

const jsonParser = bodyParser.json(); // вытаскиваем jsonParser для раскодировки json строки
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Настройка сервера
app.use(express.static('./public')); // express возвращает статичные файлы, которые хранятся на сервере

app.get('/product', (req, res) => {
    fs.readFile('./data/catalog.json', 'utf-8', (err, data) => {
        res.send(data);
    })
}); // для запросов, которые пришли с адреса /product читаем файл catalog.json, после чего отправляем пользователю содержимое этого файла(data)

app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});  // для запросов, которые пришли с адреса /cart 

//req - запрос пользователя, res - ответ сервера
app.post('/cart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data); // содержимое файла cart(json строка) парсим и получаем массив, с которым можно дальше работать
        const item = req.body; // тело(данные (json строка) о товаре, который добавляем в корзину) запроса записываем в переменную item

        cart.push(item); // добавляем item в массив cart

        // полученный массив cart преобразуем в Json строку и записываем её в файл cart.json
        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.send('ok');
        });
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000!');
}); // запуск сервера 