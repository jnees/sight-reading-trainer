import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Keyboard from './components/Keyboard';
import Music from './components/Music.js';
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Music />
          <Keyboard />
        </div>
      </Provider>
    );
  }
}

export default App;
