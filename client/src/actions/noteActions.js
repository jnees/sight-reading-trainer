import axios from 'axios';
import { GET_NOTES, SEND_ATTEMPT, GET_STATUS} from "./types";

export const getNotes = () => {
    return {
        type: GET_NOTES
    };
};

export const sendAttempt = (attempt) => dispatch => {
    axios
        .post(`api/attempts`, attempt)
        .then(res => 
            dispatch({
                type: SEND_ATTEMPT,
                payload: attempt
            })
        )
};

export const getStatus = () => {
    return {
        type: GET_STATUS
    }
}