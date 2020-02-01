import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import {
  edit_client_order,
  fetch_single_client
} from "../../actions/client-actions";
import Form from "../../components/Form/form";

const findCurrentOrder = (orders, id) => {
  return orders.map(order => order._id).indexOf(id);
};

const inputsList = {
  brand: "",
  model: "",
  imei: "",
  description: "",
  wishes: "",
  repairStart: ""
};
// active

const inputs = [
  {
    label: "Бренд",
    variant: "outlined",
    type: "text",
    name: "brand"
  },
  {
    label: "Модель",
    variant: "outlined",
    type: "text",
    name: "model"
  },
  {
    label: "imei",
    variant: "outlined",
    type: "number",
    name: "imei"
  },
  {
    label: "Описание",
    variant: "outlined",
    type: "text",
    name: "description"
  },
  {
    label: "Особые пожелания",
    variant: "outlined",
    type: "text",
    name: "wishes"
  },
  {
    label: "Начало ремонта",
    variant: "outlined",
    type: "text",
    name: "repairStart"
  }
];

const OrderForm = ({
  edit_client_order,
  match,
  history,
  client,
  clientLoading,
  fetch_single_client,
  ...rest
}) => {
  const [formData, setInitialData] = useState(inputsList);

  useEffect(() => {
    if (!client) {
      fetch_single_client(match.params.client_id);
    } else {
      const orderIndex = findCurrentOrder(client.orders, match.params.order_id);
      if (orderIndex === -1) return formData;
      let res = {
        ...formData,
        brand: client.orders[orderIndex].brand,
        model: client.orders[orderIndex].model,
        imei: client.orders[orderIndex].imei,
        description: client.orders[orderIndex].description,
        active: client.orders[orderIndex].active,
        wishes: client.orders[orderIndex].wishes
      };
      setInitialData(res);
    }
  }, [client]);

  const onSubmit = e => {
    e.preventDefault();
    const { params } = match;
    edit_client_order(params.client_id, params.order_id, formData, history);
  };

  if (clientLoading) {
    return <Loader />;
  }

  return (
    <Form
      {...rest}
      formHeader="Введите данные для обновления"
      submit={onSubmit}
      submitTitle="Сохранить"
      inputsData={formData}
      inputs={inputs}
    />
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
