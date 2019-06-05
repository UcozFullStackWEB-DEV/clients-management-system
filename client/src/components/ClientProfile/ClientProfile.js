import React, { useEffect } from "react";
import { fetch_single_client } from "../../actions/client-actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import ClientOrdersList from "../ClientOrdersList/ClientOrderList";
import Loader from "../Loader/Loader";
import "./ClientProfile.css";

function ClientProfile({ client, clientLoading, fetch_single_client, match }) {
  useEffect(() => {
    fetch_single_client(match.params.id);
  }, [fetch_single_client, match.params.id]);

  if (clientLoading) {
    return <Loader />;
  }

  const { name, surname, phone, _id, orders } = client;
  return (
    <div className="probootstrap-main js-probootstrap-main col-12">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Ім'я</th>
            <th scope="col">Фамілія</th>
            <th scope="col">Номер телефону</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
      <Link className="btn btn-primary mb-4" to={`add-client-order/${_id}`}>
        <i className="fa fa-plus" />
        Додати ремонт
      </Link>
      <ClientOrdersList clientId={_id} orders={orders} />
    </div>
  );
}

const mapStateToProps = state => {
  const { client, clientLoading } = state.client;
  return {
    client,
    clientLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_single_client: id => dispatch(fetch_single_client(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ClientProfile));
