import React from 'react';
import styles from './MyBooklistPage.module.css';


const MyBooklistPage = (props) => {

    // handleClickDelete = (id) => {
    //     this.props.handleClickDeleteBook(id)
    // }

    return (
        <main>
            <h1>My Book List</h1>
            { props.books.length !== 0 
                ? props.books.map((book, idx) => {
                   return (
                       <section key={idx} className={styles.booklistSection}>
                        <h3>Book Title: {book.title}</h3>
                        <p>Author: {book.author}</p>
                        <button type="submit">Remove Book</button>
                       </section>
                   ); 
                })
                : 
                <div>
                    <h3>You don't have any books yet!</h3>
                    <p>Why don't you find some books in the "Find Books" page or the "Reviews" page and add them to your booklist? </p>
                </div>
            }
        </main>
    );
}


export default MyBooklistPage;