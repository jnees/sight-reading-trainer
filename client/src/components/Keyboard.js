import React, { Component } from 'react';
import Key from './Key';

export default class Keyboard extends Component {
    state = {}

    render() {
        return(
            <div class="keyboard">
                <Key note="D#2" midi="39" color="black"/>
                <Key note="E2" midi="40" color="white"/>
                <Key note="F2" midi="41" color="white"/>
                <Key note="F#2" midi="42" color="black"/>
                <Key note="G2" midi="43" color="white"/>
                <Key note="G#2" midi="44" color="black"/>
                <Key note="A2" midi="45" color="white"/>
                <Key note="A#2" midi="46" color="black"/>
                <Key note="B2" midi="47" color="white"/>
                <Key note="C3" midi="48" color="white"/>
                <Key note="C#3" midi="49" color="black"/>
                <Key note="D3" midi="50" color="white"/>
                <Key note="D#3" midi="51" color="black"/>
                <Key note="E3" midi="52" color="white"/>
                <Key note="F3" midi="53" color="white"/>
                <Key note="F#3" midi="54" color="black"/>
                <Key note="G3" midi="55" color="white"/>
                <Key note="G#3" midi="56" color="black" />
                <Key note="A3" midi="57" color="white" />
                <Key note="A#3" midi="58" color="black" />
                <Key note="B3" midi="59" color="white" />
                <Key note="C4" midi="60" color="white" />
                <Key note="C#4" midi="61" color="black" />
                <Key note="D4" midi="62" color="white" />
                <Key note="D#4" midi="63" color="black" />
                <Key note="E4" midi="64" color="white" />
                <Key note="F4" midi="65" color="white" />
                <Key note="F#4" midi="66" color="black" />
                <Key note="G4" midi="67" color="white" />
                <Key note="G#4" midi="68" color="black" />
                <Key note="A4" midi="69" color="white" />
                <Key note="A#4" midi="70" color="black" />
                <Key note="B4" midi="71" color="white" />
                <Key note="C5" midi="72" color="white" />
                <Key note="C#5" midi="73" color="black" />
                <Key note="D5" midi="74" color="white" />
                <Key note="D#5" midi="75" color="black" />
                <Key note="E5" midi="76" color="white" />
                <Key note="F5" midi="77" color="white" />
                <Key note="F#5" midi="78" color="black" />
                <Key note="G5" midi="79" color="white" />
                <Key note="G#5" midi="80" color="black" />
                <Key note="A5" midi="81" color="white" />
                <Key note="A#5" midi="82" color="black" />
            </div>
        );
      }
}