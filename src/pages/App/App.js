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

  handleSignup = () => {
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
          <Route exact path="/my-booklist-page" render={(props) => 
            <MyBooklistPage {...props} />
            }
          />
          <Route exact path="/login" render={() => 
            <LoginPage />
            }
          />
          <Route exact path="/signup" render={({ history }) => 
            <SignupPage 
              history={history}
              handleSignup={this.handleSignup}
            />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
