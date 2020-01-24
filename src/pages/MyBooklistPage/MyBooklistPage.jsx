import React from 'react';
import styles from './MyBooklistPage.module.css';


const MyBooklistPage = (props) => {

    // handleClickDelete = (id) => {
    //     this.props.handleClickDeleteBook(id)
    // }

    return (
        <main>
            <header className={styles.formHeader}>My Book List</header>
            { props.books.length !== 0 
                ? props.books.map((book, idx) => {
                   return (
                       <section key={idx} className={styles.booklistSection}>
                        <h4>Title: {book.title}</h4>
                        <p>Author: {book.author}</p>
                        <button className="btn btn-default">Remove Book</button>
                       </section>
                   ); 
                })
                : 
                <div className={styles.noBookYet }>
                    <h3>You don't have any books yet!</h3>
                    <p>Why don't you find some books in the "Find Books" page or the "Reviews" page and add them to your booklist? </p>
                </div>
            }
        </main>
    );
}


export default MyBooklistPage;