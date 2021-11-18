import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import Home from './components/Home.js';
import Stats from './components/Stats'
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import store from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


/*----------------------------------------------------
  App Component - main driver component for the
  single page app.

  Router => Determines which components are rendered
          at each end point.

  Provider => Allows components to be rendered within
          the context of the Redux state store.
-----------------------------------------------------*/

class App extends Component {
  
  render() {
    return (
      <Router>
        <Provider store={store}>
         <div className="App">
          <AppNavbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/stats" exact component={Stats} />
          </Switch>
        </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
