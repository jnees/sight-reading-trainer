import React, { useState } from 'react';
import StatsTable from "./StatsTable";
import {Container, Button, Form} from "reactstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { deleteStats } from '../actions/noteActions';


/*-----------------------------------------------------------
  The Stats component is responsible for the layout
  of the stats page. The information contained in the
  stats table is part of the StatsTable component.
 ------------------------------------------------------------*/
const Stats = ({auth, deleteStats}) => {

  const [formData, setFormData] = useState({
    ack: ""
  });

  const { ack } = formData;

  // Have changes to the form by the user update the current state.
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  // OnSubmit of form -> Validate password fields and initiate action
  const onDelete = e => {
    // Validate acknowledgement phrase has been typed.
    if (ack !== "DELETE MY RECORDS FOREVER"){
      return;
    }
    setFormData({ack: ""});
    return deleteStats(auth.user._id);
  }


  if(!auth.isAuthenticated){
    return <Redirect to="/login"></Redirect>
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
          <input 
            id="ack"
            name="ack" 
            type="text"
            value={ack}
            onChange={e => onChange(e)}>
          </input>
          <Button 
            onChange={e => onChange(e)}
            onClick={e => onDelete(e)} 
            color="danger">Delete
          </Button>
        </Form>
        
      </Container>
      </div>
  );
}
  

Stats.propTypes = {
  isAuthenticated: PropTypes.bool,
  deleteStats: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{ deleteStats })(Stats);