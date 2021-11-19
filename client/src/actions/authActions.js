import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

/*----------------------------------------------------
    register({name, email, password})
    Attempt to register a user using the information
    that they entered in the register form and
    a POST to the /api/users backend endpoint.

    Returns either a REGISTER_SUCCESS or REGISTER_FAIL
    action to the authReducer along with a token
    if successful.
------------------------------------------------------*/
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    // Attempt register. If successful, token will be in payload.
    try {
        const res = await axios.post('api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => console.log(error));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}