import Vex from 'vexflow';
import React, {Component, useRef} from 'react';

const VF = Vex.Flow;

export default class Notes extends Component {

    componentDidMount() {
        const svgContainer = document.createElement('div');
        const {notes} = this.props;

        // Separate bass note from treble note.


        const bassNote = this.props.notes.slice(-1) <= 3 ? this.props.notes + "/w": "f3/w/r";
        const trebleNote = this.props.notes.slice(-1) > 3 ? this.props.notes + "/w": "b4/w/r";

        var vf = new VF.Factory({
            renderer: {elementId: svgContainer, width: 500, height: 400}
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