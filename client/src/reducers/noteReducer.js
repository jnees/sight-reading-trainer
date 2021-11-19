import { GET_NOTES, GET_STATUS, SEND_ATTEMPT, GET_NEXT_NOTE, UPDATE_STATS } from "../actions/types"
import { randomNote } from "../noteGenerator"

const initialState = {
    userID: "1",
    keySig: "C",
    notes: randomNote(),
    attempted: false,
    message: "Play this note...",
    stats: {
        data: {
            attempted1: 0,
            accuracy1: 0,
            attempted7: 0,
            accuracy7: 0,
            attempted30: 0,
            accuracy30: 0,
            attempted90: 0,
            accuracy90: 0,
            totalAttempts: 0,
            correctAttempts: 0,
            totalAccuracy: 0
            }
        }
}

const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NOTES:
            return {
                ...state
            }

        case GET_STATUS:
            return {
                ...state
            }

        case SEND_ATTEMPT:
            return {
                ...state,
                attempted: true,
                message: action.message
            }

        case GET_NEXT_NOTE:
            return {
                ...state,
                notes: action.newNote,
                attempted: false,
                message: "Play this note..."
            }

        case UPDATE_STATS:
            return {
                ...state,
                stats: action.stats
            }

        default:
            return state;
    }
}

export default noteReducer;