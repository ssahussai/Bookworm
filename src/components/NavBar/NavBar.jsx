import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/find-books-page">Find Books</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/my-reviews-page">My Reviews</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/my-booklist-page">My Booklist</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout}>Log Out</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login'>Log In</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup'>Sign Up</Link>
    </div>;

  return (
    <div>
      {nav}
    </div>
  ); 
};

export default NavBar;