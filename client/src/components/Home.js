import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Music from './Music.js';
import AttemptMsg from "./AttemptMsg.js"


/*-----------------------------------------------
 Main View with Keyboard, Note, and Message.

 Props and state are both managed by lower
 level components.
------------------------------------------------*/

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
  