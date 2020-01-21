import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './FindBooksForm.module.css';

class FindBooksForm extends Component {
    render() {
        return (
          <div>
            <header className={styles.formHeader}>Search New York Times best seller books</header>
            <form>
              <div>
                <div>
                  <input type="text" placeholder="List" />
                </div>
              </div>
              <div>
                <div>
                  <input type="text" placeholder="Bestsellers-date" />
                </div>
              </div>
              <div>
                <div>
                  <input type="text" placeholder="Published-date" />
                </div>
              </div>
              <div>
                <div>
                  <input type="Number" placeholder="Offset" />
                </div>
              </div>
              <div>
                <div>
                  <button>Search</button>
                  <Link to='/'>Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        );
    }
}
    
export default FindBooksForm;
    
