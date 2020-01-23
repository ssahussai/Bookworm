import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ReviewsForm.module.css'; 
import { searchBooksByIsbn, searchBooksByTitle, searchBooksByAuthor } from '../../utils/books-api';

class ReviewsForm extends Component {
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

      handleClick = (e, book) => {
        e.preventDefault();
        this.props.handleClick(book)
      }
      
    render() {
        return (
          <div>
            <header className={styles.formTitle}>Find Book Reviews</header>
            <form className={styles.formHeader} onSubmit={this.handleSubmit}>
              <div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input 
                    className="form-control"
                    name="authorName" 
                    value={this.state.authorName} 
                    onChange={this.handleChange}
                    type="text" placeholder="Author"
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    className="form-control"
                    name="titleName"
                    value={this.state.titleName}
                    onChange={this.handleChange}
                    type="text" placeholder="Book Title"
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    className="form-control"
                    name="isbnName"
                    value={this.state.isbnName}
                    onChange={this.handleChange}
                    type="text" placeholder="ISBN"
                  />
                </div>
              </div >
                <div className="form-group">
                  <div className="col-sm-12 text-center">
                    <button className="btn btn-default" type="submit">Search</button>&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                  </div>
                </div>
              </div>
            </form>
            {/* <Link to='/'>Cancel</Link> */}
            <section className={styles.bookSection}>
              {
                this.state.results.map((item, idx) => (
                <div key={idx} className={styles.bookReviewContainer}>
                  <p>Title: {item.book_title}</p>
                  <p>Author: {item.book_author}</p>
                  <p>Summary: {item.summary}</p>
                  <p>Published On: {item.publication_dt}</p>
                  <p>ISBN: {item.isbn13}</p>
                  <p>Reviews Link: {item.url}</p>
                  <button onClick={(e) => this.handleClick(e, item)}>
                    Add to My Booklist
                  </button>
                </div>
                ))
              }
            </section>
          </div>
        );
    }
}
    
export default  ReviewsForm;
