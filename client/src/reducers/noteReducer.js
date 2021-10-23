import { GET_NOTES, GET_STATUS, SEND_ATTEMPT } from "../actions/types"

const initialState = {
    userID: 1,
    keySig: "C",
    notes: 'D3'
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
            return {
                ...state,
            }

        default:
            return state;
    }
}