import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './FindBooksForm.module.css';
import { searchBooksByListData, getAllList } from '../../utils/books-api';

class FindBooksForm extends Component {
  constructor() {
    super()
    this.state = {
      list: "",
      listName: "",
      results: [],
      listResults: []
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }


  handlClickFindList = e => {
    e.preventDefault();
    getAllList(this.state.list)
    .then(data => {
      this.setState({
        list: '',
        listResults: data.results
      });
    });
  }


  handleSubmit = e => {
    e.preventDefault();
    searchBooksByListData(this.state.listName)
    .then(data => {
      this.setState({
        listName: '',
        results: data.results.books
      });
    });
  }

  handleClick = (e, book) => {
    e.preventDefault();
    this.props.handleClickFindBook(book)
  }

  render() {
    return (
      <div>
        <header className={styles.formHeader}>Search Best Seller Books</header>
        <form onSubmit={this.handleSubmit}>
          <div>
          <div className="form-group">
            <div className="col-sm-12">
              <input 
                className="form-control" 
                name="listName"
                value={this.state.listName} 
                onChange={this.handleChange}
                type="text" placeholder="Enter List Name" 
              />
            </div>
          </div>
            <div className={styles.btnHead}>
              <button className='btn btn-default' type="submit">Search</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>&nbsp;&nbsp;
        <section className={styles.findBooksSection}>
          {
            this.state.results.map((item, idx) => (
            <div key={idx} className={styles.findBooksContainer}>
              <p>Book Title: {item.title}</p>
              <p>Author: {item.author}</p>
              <p>Description: {item.description}</p>
              <p><a target="_blank" href={item.amazon_product_url} className={styles.formatLinkB}>Buy it on Amazon</a></p>
              <button onClick={(e) => this.handleClick(e, item)}>Add to My Booklist</button>
            </div>
            ))
          }
        </section> 
        <div className={styles.btnFind}>
          <h4 className={styles.paraStyle}>New York Times catagorizes its best selling books in multiple lists.</h4>
          <h4 className={styles.paraStyle}>Click the button below to find the list names so that you can search the list name obove to get books within that list catagory.</h4>
          <button className='btn btn-default' onClick={this.handlClickFindList}>Find List Names</button>
          {
            this.state.listResults.map((item, idx) => (
            <div key={idx}>
              <p>{item.list_name}</p>
            </div>
            ))
          }
        </div>   
      </div>
    );
  }
}
    
export default FindBooksForm;
    
