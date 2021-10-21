import React, { Component } from 'react';

export default class Key extends Component {
    state = {
        isPressed: false,
        labelHidden: true
    }

    toggle = () => {
        this.setState({
            isPressed: !this.state.isPressed
        });
    }

    render() {
        return(
          <button class={this.props.color} onClick={this.toggle} data={this.props.note}>
            &nbsp;
            <span class="note-label" hidden={this.state.labelHidden}>
              {this.props.note}
            </span>
          </button>
        );
      }
}