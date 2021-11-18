import Vex from 'vexflow';
import React, {Component} from 'react';


/*-----------------------------------------------------------
  The Notes component manages the actual drawing of the
  note and music staff on the screen. This is an implementation
  of the EasyScore class in the VexFlow library.

  More info on using VexFlow:
  https://github.com/0xfe/vexflow/wiki/Using-EasyScore

  This component receives the note to draw as a prop rather
  than connecting to state directly.
 ------------------------------------------------------------*/
const VF = Vex.Flow;

export default class Notes extends Component {

    componentDidMount() {
        const svgContainer = document.createElement('div');
        const notes = this.props.notes;

        // Separate bass note from treble note.
        const bassNote = notes.slice(-1) <= 3 ? notes + "/w": "f3/w/r";
        const trebleNote = notes.slice(-1) > 3 ? notes + "/w": "b4/w/r";

        var vf = new VF.Factory({
            renderer: {elementId: svgContainer, width: 500, height: 300}
        });
        var score = vf.EasyScore();
        var system = vf.System();

        system.addStave({
            voices: [
                score.voice(score.notes(trebleNote, {clef: 'treble', stem:'up'}))
            ]
        }).addClef('treble').addTimeSignature('4/4');

        // BASS CLEF
        system.addStave({
            voices: [
                score.voice(score.notes(bassNote, {clef: 'bass', stem:'down'}))
            ]
        }).addClef('bass').addTimeSignature('4/4');
        system.addConnector();
        vf.draw();
 
        this.refs.outer.appendChild(svgContainer);
    }

    render() {
        return <div id="music" ref="outer"></div>;
    }
}