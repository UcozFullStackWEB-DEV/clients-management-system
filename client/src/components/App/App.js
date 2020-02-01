import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import Aside from "../../containers/navigation/navigation";
import AddClient from "../../containers/add-client/add-client";
import Home from "../../containers/home/home";
import Clients from "../../containers/clients/clients";
import ClientProfile from "../../containers/client-profile/client-profile";
import OrderForm from "../../containers/add-client-order/add-client-order";
import EditClientOrder from "../../containers/edit-order/edit-order";
import store from "../../store";
import setAuthToken from "../../utils/setAuthHeaders";
import { set_repairer } from "../../actions/repairer-actions";
import { logout_repairer } from "../../actions/repairer-actions";
import { clear_all_clients } from "../../actions/client-actions";
import RegisterForm from "../../containers/register-form/register-form";
import LoginForm from "../../containers/login-form/login-form";
import MainWrapper from "../UI/main";
import "./App.css";

if (localStorage.jwtToken) {
  console.log("user is authenticated");
  const { jwtToken } = localStorage;
  setAuthToken(jwtToken);
  const decodedUser = jwt_decode(jwtToken);
  store.dispatch(set_repairer(decodedUser));
  if (decodedUser.exp < Date.now() / 1000) {
    store.dispatch(clear_all_clients());
    store.dispatch(logout_repairer);
  }
}

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Aside open={open} setOpen={setOpen} />
          <Switch>
            <MainWrapper open={open}>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route
                path="/clients/add-client-order/:id"
                component={OrderForm}
              />
              <Route path="/clients/:id" component={ClientProfile} exact />
              <Route
                path="/clients/edit-client-order/:client_id/:order_id"
                component={EditClientOrder}
                exact
              />
              <Route path="/clients" component={Clients} exact />
              <Route path="/add-client" component={AddClient} />
            </MainWrapper>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
