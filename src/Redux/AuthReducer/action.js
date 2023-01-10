//Write the ActionCreator functions here

import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export let postloginrequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export let postloginsuccess = (value) => {
  return {
    type: LOGIN_SUCCESS,
    payload: value,
  };
};
export let login = (payload) => (dispatch) => {
  dispatch(postloginrequest());
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((response) => {
      return dispatch(postloginsuccess(response.data.token));
    })
    .catch((e) => dispatch(postloginfailure()));
};
export let postloginfailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

// "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
