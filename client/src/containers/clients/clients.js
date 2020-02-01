import React, { useEffect } from "react";
import { fetch_all_clients } from "../../actions/client-actions";
import { connect } from "react-redux";
import ClientsPage from "../../components/Clients/Clients";

const Clients = ({ fetch_all_clients, loading, clients }) => {
  useEffect(() => {
    fetch_all_clients();
  }, [fetch_all_clients]);

  return <ClientsPage clients={clients} loading={loading} />;
};

const mapStateToProps = ({ client }) => {
  const { clients, loading } = client;
  return {
    clients,
    loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetch_all_clients: () => dispatch(fetch_all_clients())
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
