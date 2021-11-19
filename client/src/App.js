import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
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
  Route
} from "react-router-dom";
import { loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken'

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


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

    // Load User ->  Run once only (like componentDidMount)
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);
  
    return (
      <Router>
          <Provider store={store}>
            <AppNavbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/stats">
                <Stats />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>

              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>

          </Provider>
      </Router>
    );
}

export default App;
