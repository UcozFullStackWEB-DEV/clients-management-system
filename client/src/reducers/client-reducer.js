import {
  FETCH_ALL_CLIENTS_SUCCESS,
  FETCH_ALL_CLIENTS,
  FETCH_SINGLE_CLIENT,
  FETCH_SINGLE_CLIENT_SUCCESS,
  CLEAR_ALL_CLIENTS
} from "../actions/types";

const initialState = {
  clients: null,
  loading: true,
  client: null,
  clientLoading: true
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
    case FETCH_SINGLE_CLIENT:
      return {
        ...state,
        clientLoading: true
      };
    case FETCH_SINGLE_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.payload,
        clientLoading: false
      };
    case CLEAR_ALL_CLIENTS:
      return {
        ...state,
        clients: null,
        loading: true,
        client: null,
        clientLoading: true
      };
    default:
      return state;
  }
};

export default ClientsReducer;
