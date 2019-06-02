import axios from "axios";
import { FETCH_ALL_CLIENTS_SUCCESS, FETCH_ALL_CLIENTS } from "../actions/types";

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
