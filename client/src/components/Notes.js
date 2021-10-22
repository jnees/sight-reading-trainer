import Vex from 'vexflow';
import React, {Component, useRef} from 'react';

const VF = Vex.Flow;

export default class Notes extends Component {

    componentDidMount() {
        const svgContainer = document.createElement('div');
        const {notes} = this.props;

        // TODO: Add function to separate bass/treble notes.

        var vf = new VF.Factory({
            renderer: {elementId: svgContainer, width: 500, height: 400}
        });
        var score = vf.EasyScore();
        var system = vf.System();

        system.addStave({
            voices: [
                score.voice(score.notes(notes)),
            ]
        }).addClef('treble').addTimeSignature('4/4');

        system.addStave({
            voices: [
                score.voice(score.notes(notes)),
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