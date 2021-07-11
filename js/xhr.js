// function makeGetRequest(url, callback) {
//     let xhr;

//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             callback(xhr.responseText);
//         }
//     }

//     xhr.open('GET', url, true)
//     xhr.send();
// }

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGetRequest(method, url) {
    return new Promise((resolve, reject) => {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open(method, url, true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState >= 400) {
                reject(xhr.responseText);
            } else {
                resolve(xhr.responseText);
            }
        }

        xhr.onerror = () => {
            reject(xhr.responseText);
        }

        xhr.send();
    })
}

makeGetRequest('GET', `${API_URL}/catalogData.json`);