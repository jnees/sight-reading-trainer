import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Notes from './Notes';

export default class Music extends Component {

    state = {
        notes: 'C#5/q, B4, A4, G#4' 
    }

    render() {
        return (
             <Container id={'exercise-container'}>
                 <Notes notes={this.state.notes} />
             </Container>
         );
     }
}