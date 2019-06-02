import axios from "axios";
import {
  FETCH_ALL_CLIENTS_SUCCESS,
  FETCH_ALL_CLIENTS,
  FETCH_SINGLE_CLIENT,
  FETCH_SINGLE_CLIENT_SUCCESS
} from "../actions/types";

export const fetch_all_clients = () => dispatch => {
  dispatch({ type: FETCH_ALL_CLIENTS });
  axios
    .get("/api/clients")
    .then(clients => {
      dispatch({
        type: FETCH_ALL_CLIENTS_SUCCESS,
        payload: clients.data
      });
    })
    .catch(err => console.log(err));
};

export const fetch_single_client = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_CLIENT });
  axios
    .get(`/api/clients/${id}`)
    .then(client => {
      dispatch({
        type: FETCH_SINGLE_CLIENT_SUCCESS,
        payload: client.data
      });
    })
    .catch(err => console.log(err));
};
