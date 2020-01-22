import React from 'react';
import styles from './MyBooklistPage.module.css';

const MyBooklistPage = (props) => {
    return (
        <main>
            <h1>List of all My Books</h1>
            { props.books.length !== 0 
                ? props.books.map((book, idx) => {
                   return (
                       <section key={idx} className={styles.booklistSection}>
                        <h3>Book Title: {book.title}</h3>
                        <p>Author: {book.author}</p>
                       </section>
                   ); 
                })
                : <h3>Sorry, you don't have any books yet!</h3>
            }
        </main>
    );
}


export default MyBooklistPage;