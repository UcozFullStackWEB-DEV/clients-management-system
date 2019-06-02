import React, { useEffect } from "react";
import { fetch_all_clients } from "../../actions/client-actions";
import { connect } from "react-redux";
import ClientsList from "../ClientsList/ClientsList";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import "./Clients.css";

const Clients = ({ fetch_all_clients, loading, clients }) => {
  useEffect(() => {
    fetch_all_clients();
  }, [fetch_all_clients]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container-fluid bootstrap snippet probootstrap-main js-probootstrap-main">
      <div className="row">
        <div className="col-lg-12">
          <SearchBar />
          <ClientsList clients={clients} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { clients, loading } = state.client;
  return {
    clients,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_all_clients: () => dispatch(fetch_all_clients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
