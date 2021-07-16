export default {
    _listeners: {}, // Объект, который хранит обработчики событий, до момента, пока событие не наступит

    // функция, которая добавляет обработчики событий (подписка на событие)
    addListener(type, callback) {
        if (this._listeners[type]) {
            this._listeners[type].push(callback)
        } else {
            this._listeners[type] = [callback]
        }
    },

    // вызывает все функции из массива,который находится под ключом type в объекте _listeners
    emit(type, ...params) {
        this._listeners[type].forEach(callback => {
            callback(...params);
        });
    }
}