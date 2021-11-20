import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken'


/*----------------------------------------------------
    loadUser

    This function attempts to load a user from through
    a GET request to backend "/api/auth". The middleware
    of that endpoint requires a token in the header.
------------------------------------------------------*/
export const loadUser = () => async dispatch => {

    // Set global header if token.
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    // Attempt to retreive user info
    try{
        const res = await axios.get("/api/auth");

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch(error){
        dispatch({
            type: AUTH_ERROR
        });
    }
}


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
        dispatch(loadUser());
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


/*----------------------------------------------------
    login
------------------------------------------------------*/
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    // Attempt login. If successful, token will be in payload.
    try {
        const res = await axios.post('api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch(err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => console.log(error));
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

/*----------------------------------------------------
    Logout User -> Reducer will remove token and
    update store.
------------------------------------------------------*/
export const logout  = () => dispatch => {
    // Send update to the store
    dispatch({
        type: LOGOUT
    });
} 