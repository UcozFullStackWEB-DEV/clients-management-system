import React, { useEffect } from "react";
import { fetch_single_client } from "../../actions/client-actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ClientProfileView from "../../components/ClientProfile/ClientProfile";

const ClientProfile = ({
  client,
  clientLoading,
  fetch_single_client,
  match
}) => {
  useEffect(() => {
    fetch_single_client(match.params.id);
  }, [fetch_single_client, match.params.id]);

  return <ClientProfileView client={client} clientLoading={clientLoading} />;
};

const mapStateToProps = state => {
  const { client, clientLoading } = state.client;
  return {
    client,
    clientLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetch_single_client: id => dispatch(fetch_single_client(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ClientProfile));
