import axios from "axios";
import {
  REPAIRER_LOGIN_START,
  REPAIRER_LOGIN_SUCCESS,
  REPAIRER_LOGIN_ERRORS,
  LOGOUT_REPAIRER
} from "./types";
import jwt_decode from "jwt-decode";
import setAuthHeaders from "../utils/setAuthHeaders";

export const set_repairer = repairer => {
  return {
    type: REPAIRER_LOGIN_SUCCESS,
    payload: repairer
  };
};

export const login_repairer = formData => dispatch => {
  dispatch({ type: REPAIRER_LOGIN_START });
  axios
    .post("/api/repairers/login", formData)
    .then(res => {
      const { token } = res.data;
      const repairer = jwt_decode(token);
      localStorage.setItem("jwtToken", token);
      dispatch({ type: REPAIRER_LOGIN_SUCCESS, payload: repairer });
      setAuthHeaders(token);
    })
    .catch(err => {
      dispatch({ type: REPAIRER_LOGIN_ERRORS, payload: err });
    });
};

export const register_repairer = (formData, history) => dispatch => {
  dispatch({ type: REPAIRER_LOGIN_START });
  axios
    .post("/api/repairers/register", formData)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      dispatch({ type: REPAIRER_LOGIN_ERRORS, payload: err });
    });
};

export const logout_repairer = () => {
  localStorage.removeItem("jwtToken");
  return {
    type: LOGOUT_REPAIRER
  };
};
