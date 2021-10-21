import React, { Component } from 'react';
import Key from './Key';

export default class Keyboard extends Component {
    state = {}

    render() {
        return(
            <div class="keyboard">
                <Key note="D#2" color="black"/>
                <Key note="E2" color="white"/>
                <Key note="F2" color="white"/>
                <Key note="F#2" color="black"/>
                <Key note="G2" color="white"/>
                <Key note="G#2" color="black"/>
                <Key note="A2" color="white"/>
                <Key note="A#2" color="black"/>
                <Key note="B2" color="white"/>
                <Key note="C3" color="white"/>
                <Key note="C#3" color="black"/>
                <Key note="D3" color="white"/>
                <Key note="D#3" color="black"/>
                <Key note="E3" color="white"/>
                <Key note="F3" color="white"/>
                <Key note="F#3" color="black"/>
                <Key note="G3" color="white"/>
                <Key note="G#3" color="black" />
                <Key note="A3" color="white" />
                <Key note="A#3" color="black" />
                <Key note="B3" color="white" />
                <Key note="C4" color="white" />
                <Key note="C#4" color="black" />
                <Key note="D4" color="white" />
                <Key note="D#4" color="black" />
                <Key note="E4" color="white" />
                <Key note="F4" color="white" />
                <Key note="F#4" color="black" />
                <Key note="G4" color="white" />
                <Key note="G#4" color="black" />
                <Key note="A4" color="white" />
                <Key note="A#4" color="black" />
                <Key note="B4" color="white" />
                <Key note="C5" color="white" />
                <Key note="C#5" color="black" />
                <Key note="D5" color="white" />
                <Key note="D#5" color="black" />
                <Key note="E5" color="white" />
                <Key note="F5" color="white" />
                <Key note="F#5" color="black" />
                <Key note="G5" color="white" />
                <Key note="G#5" color="black" />
                <Key note="A5" color="white" />
                <Key note="A#5" color="black" />
            </div>
        );
      }
}