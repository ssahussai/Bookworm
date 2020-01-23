import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './NavBar.module.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to="/" className='btn btn-danger'>Home</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to="/find-books-page" className='btn btn-danger'>Find Books</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to="/my-reviews-page" className='btn btn-danger'>Reviews</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to="/my-booklist-page" className='btn btn-danger'>My Booklist</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='btn btn-danger'>Log Out</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <span>Welcome, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='btn btn-danger'>Log In</Link>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <Link to='/signup' className='btn btn-danger'>Sign Up</Link>
    </div>;

  return (
    <div>
      {nav}
    </div>
  ); 
};

export default NavBar;