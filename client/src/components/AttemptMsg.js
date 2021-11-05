import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class AttemptMsg extends Component {
  render() {
    return(
      <div class="attempt-message">
        <p id="message">{this.props.notes.message}</p>
      </div>
    )
  }
} 
  

// Prop validation
AttemptMsg.propTypes = {
  notes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  notes: state.notes
});

export default connect(mapStateToProps, {})(AttemptMsg);

