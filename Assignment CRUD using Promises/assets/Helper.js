function getLocalStorage(key) {
    return new Promise((resolve, reject) => {
        const data = localStorage.getItem(key);
        if (data) {
            resolve(JSON.parse(data));
        } else {
            reject(new Error("no data found."));
        }


    });
}

function setLocalStorage(key, data) {
    return new Promise((resolve, reject) => {
        if (data) {
            localStorage.setItem(key, JSON.stringify(data));
            resolve();
        } else {
            reject(new Error("invalid data"));
        }
    });
}




export { getLocalStorage, setLocalStorage };
