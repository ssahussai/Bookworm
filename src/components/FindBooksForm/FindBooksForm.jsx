import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './FindBooksForm.module.css';
import { getAllBooks, searchBookreviewByAuthor } from '../../utils/books-api';

class FindBooksForm extends Component {
    constructor() {
      super()
      this.state = {
        authorName: "",
        results: []
    }
  }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
      e.preventDefault();
      searchBookreviewByAuthor(this.state.authorName)
      .then(data => {
        this.setState({ 
          authorName: '',
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
                    type="text" placeholder="Author Name"
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
                </div>
                ))
              }
            </section>
          </div>
        );
    }
}
    
export default FindBooksForm;
    
