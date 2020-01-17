import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

export default function NavBar() {
    return (
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find-books-page">Find Books</Link>
          </li>
          <li>
            <Link to="/my-booklist-page">My Booklist</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
  