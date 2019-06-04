import axios from "axios";
import {
  FETCH_ALL_CLIENTS_SUCCESS,
  FETCH_ALL_CLIENTS,
  FETCH_SINGLE_CLIENT,
  FETCH_SINGLE_CLIENT_SUCCESS,
  CLEAR_ALL_CLIENTS
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

export const add_client = (formData, history) => dispatch => {
  dispatch({ type: FETCH_SINGLE_CLIENT });
  axios
    .post("/api/clients/add-client", formData)
    .then(newClient => {
      dispatch({
        type: FETCH_SINGLE_CLIENT_SUCCESS,
        payload: newClient.data
      });
      history.push(`/clients/${newClient.data._id}`);
    })
    .catch(err => console.dir(err));
};

export const add_client_order = (id, formData, history) => dispatch => {
  dispatch({ type: FETCH_SINGLE_CLIENT });
  axios
    .post(`/api/clients/add-client-order/${id}`, formData)
    .then(updatedClient => {
      console.dir(updatedClient);
      dispatch({
        type: FETCH_SINGLE_CLIENT_SUCCESS,
        payload: updatedClient.data
      });
      history.push(`/clients/${id}`);
    })
    .catch(err => console.log(err));
};

export const clear_all_clients = () => {
  return {
    type: CLEAR_ALL_CLIENTS
  };
};
