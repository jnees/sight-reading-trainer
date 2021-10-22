import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Notes from './Notes';
import { connect } from 'react-redux';
import { getNotes } from '../actions/noteActions';
import PropTypes from 'prop-types';

class Music extends Component {

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        const { notes } = this.props.notes;
        return (
             <Container id={'exercise-container'}>
                 <Notes notes={notes} />
             </Container>
         );
     }
}

// Prop validation
Music.propTypes = {
    // Props -> getNotes() and notes state.
    getNotes: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    notes: state.notes
});

export default connect(mapStateToProps, { getNotes })(Music);