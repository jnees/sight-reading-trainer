import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus, sendAttempt } from '../actions/noteActions';
import PropTypes from 'prop-types';

class Key extends Component {

    // Set incorrect state on mount
    componentDidMount() {
      this.props.getStatus();
    }

    click = () => {
        console.log(`Piano key press: ${this.props.note} midi: ${this.props.midi}`);

        // Send Attempt
        this.props.sendAttempt(this.props.note);
    }

    render() {
      const { status } = this.props.notes
        return(
          <button class={this.props.color} 
                  onClick={this.click} 
                  data={this.props.note} 
                  midi={this.props.midi}
                  style={{ backgroundColor: status === "incorrect" ? 'red': this.props.color}}
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