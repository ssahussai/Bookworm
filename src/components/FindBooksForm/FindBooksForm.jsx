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
        <header className={styles.formHeader}>Search best seller books</header>
        <form onSubmit={this.handleSubmit}>
          <div>
          <div>
            <div>
              <input 
                name="listName"
                value={this.state.listName} 
                onChange={this.handleChange}
                type="text" placeholder="Enter List Name" 
              />
            </div>
          </div>
            <div>
              <button type="submit">Search</button>
            </div>
          </div>
        </form>
        <Link to='/'>Cancel</Link>
        <section className={styles.findBooksSection}>
          {
            this.state.results.map((item, idx) => (
            <div key={idx} className={styles.findBooksContainer}>
              <p>Book Title: {item.title}</p>
              <p>Author: {item.author}</p>
              <p>Description: {item.description}</p>
              <p>Buy it on Amazon: {item.amazon_product_url}</p>
              <button onClick={(e) => this.handleClick(e, item)}>Add to My Booklist</button>
            </div>
            ))
          }
        </section> 
        <div>
          <p>Click the button below to find the list names so that you can search it to get books within that list.</p>
          <button onClick={this.handlClickFindList}>Find List Names</button>
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
    
