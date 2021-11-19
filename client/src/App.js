import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Fragment } from 'react';
import Home from './components/Home.js';
import Stats from './components/Stats';
import Login from './components/Login';
import Register from './components/Register';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/*----------------------------------------------------
  App Component - main driver component for the
  single page app.

  Router => Determines which components are rendered
          at each end point.

  Provider => Allows components to be rendered within
          the context of the Redux state store.

  If the user is not authenticated, they will land on
  the login page.
-----------------------------------------------------*/

const isAuthenticated = false;

const App = () => {
  
    return (
      <Router>
          <Provider store={store}>
            {isAuthenticated? <AppNavbar />: null}
              
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <Home />: <Redirect to="/login" /> }
              </Route>

              <Route exact path="/stats">
                {isAuthenticated ? <Stats />: <Redirect to="/login" />}
              </Route>

              <Route exact path="/login">
                {isAuthenticated ? <Redirect to="/" />: <Login />}
              </Route>

              <Route exact path="/register">
                {isAuthenticated ? <Redirect to="/" />: <Register />}
              </Route>
            </Switch>

          </Provider>
      </Router>
    );
}

export default App;
