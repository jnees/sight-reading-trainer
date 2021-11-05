import axios from 'axios';
import { GET_NOTES, SEND_ATTEMPT, GET_STATUS, GET_NEXT_NOTE, UPDATE_STATS} from "./types";

export const getNotes = () => {
    return {
        type: GET_NOTES
    };
};

export const sendAttempt = (attempt, message) => dispatch => {
    axios
        .post(`api/attempts`, attempt)
        .then(res => 
            dispatch({
                type: SEND_ATTEMPT,
                payload: attempt,
                message: message
            })
        )
};

export const getStatus = () => {
    return {
        type: GET_STATUS
    }
}

export const getNextNote = (newNote, n_seconds) =>  dispatch => {

    setTimeout(() => {
        dispatch({
            type: GET_NEXT_NOTE,
            newNote: newNote
        })
        
    }, n_seconds * 1000)
}

export const updateStats = (userID) => dispatch => {
    axios
        .get(`api/stats/${userID}`,)
        .then(res => {
            console.log(res);
            dispatch({
                type: UPDATE_STATS,
                stats: res
            })
        }
        )
        .catch(err => {
            console.log("Error updating stats")
            console.log(err);
        })
};