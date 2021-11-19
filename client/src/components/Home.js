import React from 'react';
import Keyboard from './Keyboard';
import Music from './Music.js';
import AttemptMsg from "./AttemptMsg.js"
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


/*-----------------------------------------------
 Main View with Keyboard, Note, and Message.

 Props and state are both managed by lower
 level components.
------------------------------------------------*/

const Home = ( {isAuthenticated} ) => {
  
  if(!isAuthenticated){
    return <Redirect to="/login"></Redirect>
  }

  return (
      <div>
        <AttemptMsg />
        <Music />
        <Keyboard />
      </div>
  );
}

Home.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Home);