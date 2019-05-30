import axios from "axios";

const setAuthHeaders = token => {
  if (token) {
    //Add that token to all request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //if !token - remove Authorization headers from "defaults" object
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthHeaders;