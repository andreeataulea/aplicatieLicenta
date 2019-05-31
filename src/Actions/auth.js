import {USER_LOGGED_IN, USER_LOGGED_OUT}  from "../types";
import api from "../api.js"
import setAuthorizationHeader from "../Utils/setAuthorizationHeader";
import { stringify } from "querystring";

export const userLoggedIn = (user) => ({
    type:USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
  });

  export const login = (credentials) => (dispatch) => 
      api.user.login(credentials).then(response => {
          localStorage.appJWT = response.token;
          setAuthorizationHeader(response.token);
          dispatch(userLoggedIn(response));
          sessionStorage.setItem("user", JSON.stringify(response.user))
      });

  export const register = (data) => (dispatch) => 
      api.user.register(data).then(data => {
          localStorage.appJWT = data.token;
          dispatch(userLoggedIn(data));
          sessionStorage.setItem("user", JSON.stringify(data.user))
      });
  
export const logout = () => dispatch => {
    localStorage.removeItem("appJWT");
    setAuthorizationHeader();
    dispatch(userLoggedOut());
    sessionStorage.clear();
    };

export const confirm = token => dispatch =>
     api.user.confirm(token).then(user => {
      localStorage.appJWT = user.token;
      dispatch(userLoggedIn(user.user));
      sessionStorage.setItem("user", JSON.stringify(user.user))
    });