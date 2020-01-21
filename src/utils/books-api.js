const baseURL = 'https://api.nytimes.com/svc/books/v3/';
const apiKey = process.env.REACT_APP_NYTAPI_KEY;

// Find Books page
export function searchBooksByListData(list) {
    return fetch(`${baseURL}lists/current/${list}.json?api-key=${apiKey}`).then(response => response.json());
}

export function getAllList() {
    return fetch(`${baseURL}lists/names.json?api-key=${apiKey}`).then(response => response.json());
}


// Reviews page
export function searchBooksByAuthor(author) {
    return fetch(`${baseURL}reviews.json?author=${author}&api-key=${apiKey}`).then(response => response.json());
}

export function searchBooksByTitle(title) {
    return fetch(`${baseURL}reviews.json?title=${title}&api-key=${apiKey}`).then(response => response.json());
}

export function searchBooksByIsbn(isbn) {
    return fetch(`${baseURL}reviews.json?isbn=${isbn}&api-key=${apiKey}`).then(response => response.json());
}
