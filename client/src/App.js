import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Keyboard from './components/Keyboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Keyboard />
      </div>
    );
  }
}

export default App;
