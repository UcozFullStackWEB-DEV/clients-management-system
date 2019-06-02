import React, { useEffect } from "react";
import { fetch_single_client } from "../../actions/client-actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./ClientProfile.css";

function ClientProfile({ client, clientLoading, fetch_single_client, match }) {
  useEffect(() => {
    fetch_single_client(match.params.id);
  }, [fetch_single_client, match.params.id]);

  if (clientLoading) {
    return <Loader />;
  }

  const { name, surname, phone } = client;
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

      {client.orders.map(order => {
        const { brand, model, description, _id } = order;
        return (
          <ul key={_id} className="order-wrap">
            <li>
              <span>Бренд:</span>
              {brand}
            </li>
            <li>
              <span>Модель:</span>
              {model}
            </li>
            <li>
              <span>Опис:</span>
              {description}
            </li>
          </ul>
        );
      })}
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
