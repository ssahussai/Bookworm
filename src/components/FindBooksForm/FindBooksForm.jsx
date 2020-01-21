import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './FindBooksForm.module.css';
import { searchBooksByIsbn, searchBooksByTitle, searchBooksByAuthor } from '../../utils/books-api';

class FindBooksForm extends Component {
    constructor() {
      super()
      this.state = {
        isbnName: "",
        titleName: "",
        authorName: "",
        results: []
    }
  }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
      e.preventDefault();
      searchBooksByAuthor(this.state.authorName)
      .then(data => {
        this.setState({ 
          authorName: '',
          results: data.results 
        });
      });
      searchBooksByTitle(this.state.titleName)
      .then(data => {
        this.setState({
          titleName: '',
          results: data.results
        });
      });
      searchBooksByIsbn(this.state.isbnName)
      .then(data => {
        this.setState({
          isbnName: '',
          results: data.results
        });
      });
    }

    render() {
        return (
          <div>
            <header className={styles.formHeader}>Search New York Times best seller books</header>
            <form onSubmit={this.handleSubmit}>
              <div>
              <div>
                <div>
                  <input 
                    name="authorName" 
                    value={this.state.authorName} 
                    onChange={this.handleChange}
                    type="text" placeholder="Author"
                  />
                </div>
                <div>
                  <input
                    name="titleName"
                    value={this.state.titleName}
                    onChange={this.handleChange}
                    type="text" placeholder="Book Title"
                  />
                </div>
                <div>
                  <input
                    name="isbnName"
                    value={this.state.isbnName}
                    onChange={this.handleChange}
                    type="text" placeholder="ISBN"
                  />
                </div>
              </div>
                <div>
                  <button type="submit">Search</button>
                </div>
              </div>
            </form>
            <Link to='/'>Cancel</Link>
            <section>
              {
                this.state.results.map((item, idx) => (
                <div key={idx}>
                  <p>Title: {item.book_title}</p>
                  <p>Author: {item.book_author}</p>
                  <p>Summary: {item.summary}</p>
                  <p>Published On: {item.publication_dt}</p>
                  <p>ISBN: {item.isbn13}</p>
                </div>
                ))
              }
            </section>
          </div>
        );
    }
}
    
export default FindBooksForm;
    
