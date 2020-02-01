import React from "react";
import ClientsList from "../ClientsList/ClientsList";
import SearchBar from "../../containers/search-bar/search-bar";
import Loader from "../Loader/Loader";

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

export default Clients;
