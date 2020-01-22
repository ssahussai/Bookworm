import React from 'react';

const MyBooklistPage = (props) => {
    return (
        <main>
            <h1>List of all My Books</h1>
            { props.books.length !== 0 
                ? props.books.map((book, idx) => {
                   return (
                       <section key={idx}>
                        <h1>{book.title}</h1>
                        <h3>{book.author}</h3>
                       </section>
                   ); 
                })
                : <h3>Sorry, you don't have any books yet</h3>
            }
        </main>
    );
}


export default MyBooklistPage;