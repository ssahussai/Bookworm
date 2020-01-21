const baseURL = 'https://api.nytimes.com/svc/books/v3/';
const apiKey = process.env.REACT_APP_NYTAPI_KEY;

export function getAllBooks() {
    return fetch(`${baseURL}lists/names.json?api-key=${apiKey}`).then(response => response.json());
}

export function searchBookreviewByAuthor(author) {
    return fetch(`${baseURL}reviews.json?author=${author}&api-key=${apiKey}`).then(response => response.json());
}



// function signup(user) {
//     return fetch(BASE_URL + 'signup', {
//       method: 'POST',
//       headers: new Headers({ 'Content-Type': 'application/json' }),
//       body: JSON.stringify(user)
//     })
//     .then(res => {
//       if (res.ok) return res.json();
//       throw new Error('Email already taken!');
//     })
//     .then(({token}) => tokenService.setToken(token));
//   }