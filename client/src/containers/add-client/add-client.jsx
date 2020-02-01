import React from "react";
import Form from "../../components/Form/form";
import { connect } from "react-redux";
import { add_client } from "../../actions/client-actions";

const inputsList = {
  name: "",
  surname: "",
  brand: "",
  model: "",
  imei: "",
  phone: "",
  repairStart: "",
  description: "",
  //active: false,
  wishes: ""
};

const inputs = [
  {
    label: "Имя",
    variant: "outlined",
    type: "text",
    name: "name"
  },
  {
    label: "Фамилия",
    variant: "outlined",
    type: "text",
    name: "surname"
  },
  {
    label: "Телефон",
    variant: "outlined",
    type: "number",
    name: "phone"
  },
  {
    label: "Бренд",
    variant: "outlined",
    type: "text",
    name: "brand",
    id: "email"
  },
  {
    label: "Модель",
    variant: "outlined",
    type: "text",
    name: "model",
    id: "model"
  },
  {
    label: "Imei",
    variant: "outlined",
    type: "number",
    name: "imei",
    id: "imei"
  },
  {
    label: "Начало ремонта",
    variant: "outlined",
    type: "text",
    name: "repairStart",
    id: "repairStart"
  },
  {
    label: "Описание",
    variant: "outlined",
    type: "text",
    name: "description",
    id: "description"
  },
  {
    label: "Особые пожелания",
    variant: "outlined",
    type: "text",
    name: "wishes",
    id: "wishes"
  }
];

const AddClient = ({ add_client, history }) => {
  const onSubmit = (e, formData) => {
    e.preventDefault();
    add_client(formData, history);
  };
  return (
    <Form
      inputs={inputs}
      formHeader="Добавить клиента"
      submitTitle="Добавить"
      submit={onSubmit}
      inputsData={inputsList}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  add_client: (formData, history) => dispatch(add_client(formData, history))
});
export default connect(() => {
  return {};
}, mapDispatchToProps)(AddClient);
