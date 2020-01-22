import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import FindBooksPage from '../FindBooksPage/FindBooksPage';
import MyBooklistPage from '../MyBooklistPage/MyBooklistPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import MyReviewsPage from '../MyReviewsPage/MyReviewsPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      books: []
    };
  }

  componentDidMount() {
    if(this.state.user) {
      this.handleGetBooks()
    }
  }


  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, books: [] });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()}, () => {
      this.handleGetBooks(); 
    });
  }

  handleGetBooks = () => {
    userService.getBooks(this.state.user._id).then(data => {
      this.setState({ books: data });
    });
  }

  handleClick = ({ book_title, book_author }) => {
    userService.addBook(this.state.user._id, {
      title: book_title,
      author: book_author
    }).then(data => {
       this.setState({ books: data }, () => {
         return this.props.history.push('/my-booklist-page')
       })
    })
  }

  // findbooks
  handleClickFindBook = ({ title, author }) => {
    userService.addBook(this.state.user._id, {
      title: title,
      author: author
    }).then(data => {
       this.setState({ books: data }, () => {
         return this.props.history.push('/my-booklist-page')
       })
    })
  }

  render () {
    return (
      <div className="App">
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/" render={(props) => 
            <HomePage {...props} />
            }
          />
          <Route exact path="/find-books-page" render={(props) => 
            <FindBooksPage {...props} 
              handleClickFindBook={this.handleClickFindBook}
            />
            }
          />
          <Route exact path="/my-reviews-page" render={(props) => 
            <MyReviewsPage {...props} 
              handleClick={this.handleClick}
            />
            }
          />
          <Route exact path="/my-booklist-page" render={(props) => 
            <MyBooklistPage books={this.state.books} {...props} />
            }
          />
          <Route exact path="/login" render={({ history }) => 
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
            }
          />
          <Route exact path="/signup" render={({ history }) => 
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
 