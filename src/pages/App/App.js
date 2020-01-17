import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import FindBooksPage from '../FindBooksPage/FindBooksPage';
import MyBooklistPage from '../MyBooklistPage/MyBooklistPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar />
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
          <Route exact path="/login" render={(props) => 
            <LoginPage {...props} />
            }
          />
          <Route exact path="/signup" render={(props) => 
            <SignupPage {...props} />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
