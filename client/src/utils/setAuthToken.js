import axios from "axios";

/*----------------------------------------------------------
    If the user has a token, add it to the global headers
    in axios so that it is included with all requests.

    'x-auth-token' header is required by the middleware
    for the api/auth GET request which supplies user info.
-----------------------------------------------------------*/
const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;