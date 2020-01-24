import React from 'react';
import styles from './HomePage.module.css';


const HomePage = (props) => {
    return (
        <main>
            <h1 className={styles.h1}>B O O K W O R M</h1>
                <h3 className={styles.h3}>Welcome! Please login to explore your reading options. If you are not a member yet, please Sign Up to....</h3>
                <section className={styles.descSection}>
                        <p>Find New York Times best seller books</p>
                        <p>Get book reviews from New York Times</p>
                        <p>Have your own customized booklist</p>
                 
                  
                </section>
                
        </main>
    );
}

export default HomePage;