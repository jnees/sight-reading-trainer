import { GET_NOTES, GET_STATUS, SEND_ATTEMPT } from "../actions/types"

const initialState = {
    notes: 'D3',
    status: "correct"
}

export default function(state = initialState, action){
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

            // Check note pressed to see if it is the same as the expected note, update state
            let correct = action.note === state.notes;
            state.status = correct ? "correct" : "incorrect"
            console.log(state.status, action.note, state.notes);

            return {
                ...state,
            }

        default:
            return state;
    }
}