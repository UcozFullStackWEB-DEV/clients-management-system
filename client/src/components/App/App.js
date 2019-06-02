import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import Aside from "../Aside/Aside";
import AddClient from "../AddClient/AddClient";
import Home from "../Home/Home";
import Clients from "../Clients/Clients";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import ClientProfile from "../ClientProfile/ClientProfile";
import store from "../../store";
import setAuthToken from "../../utils/setAuthHeaders";
import { set_repairer } from "../../actions/repairer-actions";
import "./App.css";
import "./animate.css";

if (localStorage.jwtToken) {
  console.log("user is authenticated");
  const { jwtToken } = localStorage;
  setAuthToken(jwtToken);
  const decodedUser = jwt_decode(jwtToken);
  store.dispatch(set_repairer(decodedUser));
  // if (decodedUser.exp < Date.now() / 1000) {
  //   store.dispatch(clearCurrentProfile());
  //   store.dispatch(logOutUser());
  //   window.location.href = "/login";
  // }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Aside />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/" component={Home} exact />
          <Route path="/clients/:id" component={ClientProfile} />
          <Route path="/clients" component={Clients} exact />
          <Route path="/add-client" component={AddClient} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
