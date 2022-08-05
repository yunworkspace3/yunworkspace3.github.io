const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const data = [];
const dataLength = 3;

function render() {
    const separator = '';
    const table = document.querySelector('table');

    const keys = [];
    for (let key in data[0]) {
        keys.push(key);
    }

    const rows = [];
    rows.push(keys.map((key) => `<th>${key}</th>`).join(separator));
    data.forEach((item) => {
        rows.push(keys.map((key) => `<td>${item[key]}</td>`).join(separator));
    });

    const html = rows.map((row) => `<tr>${row}</tr>`).join(separator);
    table.innerHTML = html;
}

async function api(url) {
    return fetch(url).then((response) => {
        return response.json();
    });
}

function hasUndefined(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
            return true;
        }
    }
    return false;
}

async function multiApi() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < dataLength; i++) {
            api(`${apiUrl}/${i + 1}`).then((res) => {
                data[i] = res;
                if (data.length === dataLength && !hasUndefined(data)) {
                    resolve();
                }
            });
        }
    });
}
