import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Music from './Music.js';
import AttemptMsg from "./AttemptMsg.js"

class Home extends Component {

    render() {
      return (
          <div>
            <AttemptMsg />
            <Music />
            <Keyboard />
          </div>
      );
    }
  }
  
  export default Home;
  