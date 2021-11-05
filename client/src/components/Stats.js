import React, { Component } from 'react';
import StatsTable from "./StatsTable";
import {Container, Button, Form} from "reactstrap";

class Stats extends Component {


    render() {
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
  }
  
  export default Stats;
  