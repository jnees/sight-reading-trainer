import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

/*-----------------------------------------------------------
  The attempt message is the text shown to the user 
  above the note staff. It instructs them on what action 
  to take next and whether their attempt was correct or not.

  This message is set through actions which occur on 
  user attempts. This component is set to update when
  the store's message state changes due to these actions.
 -----------------------------------------------------------*/
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

