import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ReviewsForm.module.css'; 

class ReviewsForm extends Component {

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
      e.preventDefault();
    }

    render() {
        return (
          <div>
            <header className={styles.formHeader}>Find Book Reviews</header>
            <form onSubmit={this.handleSubmit}>
              <div>
              <div>
                <div>
                  <input type="text" placeholder="Author"/>
                </div>
                <div>
                  <input type="text" placeholder="Book Title" />
                </div>
                <div>
                  <input type="text" placeholder="ISBN"
                  />
                </div>
              </div>
                <div>
                  <button type="submit">Search</button>
                </div>
              </div>
            </form>
            <Link to='/'>Cancel</Link>
          </div>
        );
    }
}
    
export default  ReviewsForm;