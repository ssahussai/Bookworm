import React from 'react';
import homeimg from './homeimg.png';
import styles from './HomePage.module.css';


const HomePage = (props) => {
    return (
        <main>
            <h1 className={styles.h1}>B O O K W O R M</h1>
                <h4 className={styles.h4}>Welcome! Please login to explore your reading options. If you are not a member yet, please Sign Up</h4>
            <img src={homeimg} alt="img"/>
        </main>
    );
}

export default HomePage;