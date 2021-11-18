import React, {Component } from 'react';
import {Container} from 'reactstrap';
import Notes from './Notes';
import { connect } from 'react-redux';
import { getNotes } from '../actions/noteActions';
import PropTypes from 'prop-types';


/*-----------------------------------------------------------
  The Music component is responsible for rendering new
  Notes components on the screen. It reacts to state changes
  to the current notes data saved in the Redux store and
  rerenders on update.
 ------------------------------------------------------------*/
class Music extends Component {

    // Use getNotes() function to 
    componentDidMount() {
        this.props.getNotes();
    }
    
    render() {
        return (
             <Container id={'exercise-container'}>
                 <Notes key={this.props.notes} notes={ this.props.notes} />
             </Container>
         );
     }
}

// Prop validation
Music.propTypes = {
    getNotes: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired
}

// Set redux state to props on state changes
const mapStateToProps = (state) => (
    {
    notes: state.notes.notes
});

export default connect(mapStateToProps, { getNotes })(Music);