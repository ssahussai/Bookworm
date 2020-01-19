import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
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
      user: userService.getUser()
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
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
            <FindBooksPage {...props} />
            }
          />
          <Route exact path="/my-reviews-page" render={(props) => 
            <MyReviewsPage {...props} />
            }
          />
          <Route exact path="/my-booklist-page" render={(props) => 
            <MyBooklistPage {...props} />
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

export default App;
