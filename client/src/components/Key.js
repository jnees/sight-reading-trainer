import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus, sendAttempt, getNextNote, updateStats } from '../actions/noteActions';
import PropTypes from 'prop-types';
import { randomNote } from '../noteGenerator';


/*-----------------------------------------------------------
  Each piano key on the keyboard is a Key component. Clicking
  a Key triggers the sequence of actions needed to make a
  note attempt, check it, and update the database and the
  message on the screen.

  The key state is connected to the Redux store. The values
  of the key's note and midi number are determined by the
  props passed in by the Keyboard component.
 ------------------------------------------------------------*/
class Key extends Component {

    state = {
      correct: false
    }

    /* Click Handling */
    click = () => {
        console.log(`Piano key press: ${this.props.note} midi: ${this.props.midi}`);

        // Check if correct and set note style
        const correct = this.props.note === this.props.notes.notes;
 
        // Attempt payload
        const attempt = {
          userID: this.props.auth.user._id,
          keySig: this.props.notes.keySig,
          note: this.props.notes.notes,
          correct: correct
        }
        
        var message = ""
        if (correct) {
          message = `${this.props.notes.notes} is correct!`
        } else {
          message = `Incorrect! The note was ${this.props.notes.notes}`
        }

        // Send Attempt
        console.log("sending attempt: ", attempt);
        this.props.sendAttempt(attempt, message);

        // Request next note
        const newNote = randomNote();
        console.log("requesting next note: ", newNote);
        this.props.getNextNote(newNote, 2.5);

        // TODO: Color handling and making sure only this note renders.

        // Update Stats
        this.props.updateStats(this.props.auth.user._id);

    }

    render() {
      
        return(
          <button 
            name={this.props.note}
            class={this.props.color}
            onClick={this.click} 
            data={this.props.note} 
            midi={this.props.midi}
            >
            &nbsp;
          </button>
        );
      }
}

// Prop validation
Key.propTypes = {
  getStatus: PropTypes.func.isRequired,
  sendAttempt: PropTypes.func.isRequired,
  getNextNote: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  notes: state.notes,
  auth: state.auth
});

export default connect(mapStateToProps, { getStatus, sendAttempt, getNextNote, updateStats })(Key);