import { GET_NOTES, SEND_ATTEMPT } from "./types";

export const getNotes = () => {
    return {
        type: GET_NOTES
    };
};