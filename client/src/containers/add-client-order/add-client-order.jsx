import React from "react";
import { connect } from "react-redux";
import { add_client_order } from "../../actions/client-actions";
import Form from "../../components/Form/form";

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

const OrderForm = ({ add_client_order, match, history }) => {
  const onSubmit = (e, formData) => {
    e.preventDefault();
    add_client_order(match.params.id, formData, history);
  };

  return (
    <Form
      formHeader="Введите данные для добавления"
      submit={onSubmit}
      submitTitle="Добавить"
      inputsData={inputsList}
      inputs={inputs}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  add_client_order: (id, formData, history) =>
    dispatch(add_client_order(id, formData, history))
});

export default connect(() => {}, mapDispatchToProps)(OrderForm);
