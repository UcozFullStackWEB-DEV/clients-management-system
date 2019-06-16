import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import {
  edit_client_order,
  fetch_single_client
} from "../../actions/client-actions";

const findCurrentOrder = (orders, id) => {
  return orders.map(order => order._id).indexOf(id);
};

function OrderForm({
  edit_client_order,
  match,
  history,
  client,
  clientLoading,
  fetch_single_client
}) {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    imei: "",
    description: "",
    active: false,
    wishes: ""
  });

  useEffect(() => {
    if (!client) {
      fetch_single_client(match.params.client_id);
    } else {
      setFormData(() => {
        const orderIndex = findCurrentOrder(
          client.orders,
          match.params.order_id
        );
        if (orderIndex === -1) return formData;
        return {
          ...formData,
          brand: client.orders[orderIndex].brand,
          model: client.orders[orderIndex].model,
          imei: client.orders[orderIndex].imei,
          description: client.orders[orderIndex].description,
          active: client.orders[orderIndex].active,
          wishes: client.orders[orderIndex].wishes
        };
      });
    }
  }, [client]);

  const onSubmit = e => {
    e.preventDefault();
    const { params } = match;
    edit_client_order(params.client_id, params.order_id, formData, history);
  };

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (clientLoading) {
    return <Loader />;
  }

  return (
    <main role="main" className="probootstrap-main js-probootstrap-main">
      <div className="probootstrap-bar">
        <button className="probootstrap-toggle js-probootstrap-toggle">
          <span className="oi oi-menu" />
        </button>
        <div className="probootstrap-main-site-logo">
          <a href="index.html">Aside</a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-12">
            <div className="row">
              <div className="col-xl-8 col-lg-12 mx-auto">
                <form onSubmit={onSubmit} className="probootstrap-form mb-5">
                  <h2>Внесіть зміни</h2>
                  <div className="form-group">
                    <label htmlFor="brand">Бренд</label>
                    <input
                      className="form-control"
                      id="brand"
                      name="brand"
                      onChange={onChange}
                      value={formData.brand}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="model">Модель</label>
                    <input
                      className="form-control"
                      id="model"
                      name="model"
                      onChange={onChange}
                      value={formData.model}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imei">Imei</label>
                    <input
                      className="form-control"
                      id="imei"
                      name="imei"
                      onChange={onChange}
                      value={formData.imei}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="description">Опис проблеми</label>
                    <textarea
                      cols={25}
                      rows={5}
                      className="form-control"
                      id="description"
                      name="description"
                      onChange={onChange}
                      value={formData.description}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="wishes">Додаткові побажання</label>
                    <textarea
                      cols={15}
                      rows={5}
                      className="form-control"
                      id="wishes"
                      name="wishes"
                      onChange={onChange}
                      value={formData.wishes}
                    />
                  </div>

                  <div className="form-group">
                    <div>
                      <label htmlFor="date">Введіть дату</label>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="repairStart"
                      onChange={onChange}
                      value={formData.repairStart}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="active-repair"
                      name="active"
                      onChange={onChange}
                      value={formData.active}
                    />
                    <label className="form-check-label" htmlFor="active-repair">
                      Активний ремонт
                    </label>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      id="submit"
                      name="submit"
                      value="Надіслати"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
    edit_client_order: (client_id, order_id, formData, history) =>
      dispatch(edit_client_order(client_id, order_id, formData, history)),
    fetch_single_client: id => dispatch(fetch_single_client(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm);
