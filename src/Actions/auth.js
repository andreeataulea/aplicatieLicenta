import {USER_LOGGED_IN, USER_LOGGED_OUT}  from "../types";
import api from "../api.js"
import setAuthorizationHeader from "../Utils/setAuthorizationHeader";

export const userLoggedIn = (user) => ({
    type:USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
  });

export const login = (credentials) => (dispatch) => 
    api.user.login(credentials).then(user => {
        localStorage.appJWT = user.token;
        setAuthorizationHeader(user.token);
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem("appJWT");
    setAuthorizationHeader();
    dispatch(userLoggedOut());
    };

export const confirm = token => dispatch =>
     api.user.confirm(token).then(user => {
      localStorage.appJWT = user.token;
      dispatch(userLoggedIn(user));
    });