import React, { Component } from 'react';

export default class Key extends Component {
    state = {
        labelHidden: true
    }

    toggle = () => {
        console.log(`Piano key press: ${this.props.note} midi: ${this.props.midi}`);
    }

    render() {
        return(
          <button class={this.props.color} 
                  onClick={this.toggle} 
                  data={this.props.note} 
                  midi={this.props.midi}
                  >
            &nbsp;
            <span class="note-label" hidden={this.state.labelHidden}>
              {this.props.note}
            </span>
          </button>
        );
      }
}