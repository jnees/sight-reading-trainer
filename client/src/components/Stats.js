import React from 'react';
import StatsTable from "./StatsTable";
import {Container, Button, Form} from "reactstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { updateStats } from '../actions/noteActions';


/*-----------------------------------------------------------
  The Stats component is responsible for the layout
  of the stats page. The information contained in the
  stats table is part of the StatsTable component.
 ------------------------------------------------------------*/
const Stats = ({auth}) => {

  if(!auth.isAuthenticated){
    return <Redirect to="/login"></Redirect>
  } else {
    updateStats(auth.user._id);
  }

  return (
      <div>
      <Container id="stats-table">
        <h1>Statistics</h1>
        <StatsTable />
      </Container>
      <hr />
      <Container id="reset-area" >
        <h1>Reset User Statistics</h1>
        <p>Looking for a fresh start?</p>
        <p>Resetting your user data will delete all of your previous attempts.</p>
        <p><strong>This cannot be undone.</strong></p>
        <p>Type "DELETE MY RECORDS FOREVER" in the box to continue</p>
        <Form>
          <input id="confirmation-input"></input>
          <Button color="danger">Delete</Button>
        </Form>
        
      </Container>
      </div>
  );
}
  

Stats.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{})(Stats);