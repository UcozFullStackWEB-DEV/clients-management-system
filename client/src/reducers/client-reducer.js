import { FETCH_ALL_CLIENTS_SUCCESS, FETCH_ALL_CLIENTS } from "../actions/types";

const initialState = {
  clients: null,
  loading: true
};

const ClientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CLIENTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALL_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: action.payload
      };
    default:
      return state;
  }
};

export default ClientsReducer;
