import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus, sendAttempt } from '../actions/noteActions';
import PropTypes from 'prop-types';

class Key extends Component {

    state = {
      color: this.props.color
    }

    // Set incorrect state on mount
    componentDidMount() {
      this.props.getStatus();
    }

    /* Click Handling */
    click = () => {
        console.log(`Piano key press: ${this.props.note} midi: ${this.props.midi}`);

        // Check if correct and set note style
        const correct = this.props.note === this.props.notes.notes;
        this.setState({
          ...this.state,
          color: correct ? "green" : "red"
        })

        // Attempt payload
        const attempt = {
          userId: this.props.notes.userID,
          keySig: this.props.notes.keySig,
          note: this.props.notes.notes,
          correct: correct
        }

        // Send Attempt
        console.log("sending attempt: ", attempt);
        this.props.sendAttempt(attempt);
    }

    render() {
      
        return(
          <button 
                  class={this.props.color} 
                  onClick={this.click} 
                  data={this.props.note} 
                  midi={this.props.midi}
                  style={{ backgroundColor: this.state.color}}
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
  notes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  notes: state.notes
});

export default connect(mapStateToProps, { getStatus, sendAttempt })(Key);