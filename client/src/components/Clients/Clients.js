import React from "react";
import ClientsList from "../ClientsList/ClientsList";
import SearchBar from "../../containers/search-bar/search-bar";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
const Clients = ({ loading, clients }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SearchBar />
      <ClientsList clients={clients} />
    </>
  );
};

Clients.propTypes = {
  loading: PropTypes.bool,
  clients: PropTypes.array
};

export default Clients;
