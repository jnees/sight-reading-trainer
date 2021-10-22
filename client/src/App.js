import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Keyboard from './components/Keyboard';
import Music from './components/Music.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Music />
        <Keyboard />
      </div>
    );
  }
}

export default App;
