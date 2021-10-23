import { GET_NOTES, SEND_ATTEMPT, GET_STATUS} from "./types";

export const getNotes = () => {
    return {
        type: GET_NOTES
    };
};

export const sendAttempt = (note) => {
    return {
        type: SEND_ATTEMPT,
        note: note
    };
}

export const getStatus = () => {
    return {
        type: GET_STATUS
    }
}