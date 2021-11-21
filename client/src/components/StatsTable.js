import React from 'react';
import { updateStats } from '../actions/noteActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


/*-----------------------------------------------------------
  The StatsTable is responsible for displaying the user's
  stats. This component is linked to the Redux store, which
  contains the user's latest statistics and will re-render
  when the store is updated.

  Updates to the data itself are made through the 
  UpdateStats() function in NoteReducer.js.
 ------------------------------------------------------------*/
const StatsTable = ({notes, auth}) => {

    

    return (
        <table class="table">
            
            <thead>
                <tr>
                    <th scope="col">User: {auth.user.name}</th>
                </tr>
                <tr>
                    <th scope="col">Time Period</th>
                    <th scope="col"># of Attempts</th>
                    <th scope="col">% Correct</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <th scope="row">Today</th>
                    <td>{notes.stats.data.attempted1}</td>
                    <td>{parseFloat(notes.stats.data.accuracy1).toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">Last 7 Days</th>
                    <td>{notes.stats.data.attempted7}</td>
                    <td>{parseFloat(notes.stats.data.accuracy7).toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">Last 30 Days</th>
                    <td>{notes.stats.data.attempted30}</td>
                    <td>{parseFloat(notes.stats.data.accuracy30).toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">All Time</th>
                    <td>{notes.stats.data.totalAttempts}</td>
                    <td>{parseFloat(notes.stats.data.totalAccuracy).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    );
}

  // Prop validation
StatsTable.propTypes = {
    updateStats: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        notes: state.notes,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { updateStats })(StatsTable);
  
  