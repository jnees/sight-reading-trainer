import { GET_NOTES, SEND_ATTEMPT } from "../actions/types"

const initialState = {
    notes: 'C#5/q, E5, A4, G#4'
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_NOTES:
            return {
                ...state
            }
        default:
            return state;
    }
}