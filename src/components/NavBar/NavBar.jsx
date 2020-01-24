import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './NavBar.module.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to="/" className='btn btn-primary'>Home</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to="/find-books-page" className='btn btn-primary'>Find Books</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to="/my-reviews-page" className='btn btn-primary'>Reviews</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to="/my-booklist-page" className='btn btn-primary'>My Booklist</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='btn btn-primary'>Log Out</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <span>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='btn btn-primary'>Log In</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <Link to='/signup' className='btn btn-primary'>Sign Up</Link>
    </div>;

  return (
    <div>
      {nav}
    </div>
  ); 
};

export default NavBar;