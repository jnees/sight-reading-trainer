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
