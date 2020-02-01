import React, { useEffect } from "react";
import { register_repairer } from "../../actions/repairer-actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Form from "../../components/Form/form";

const inputsList = {
  email: "",
  username: "",
  password: "",
  password2: "",
  phone: ""
};

const inputs = [
  {
    label: "Email",
    variant: "outlined",
    type: "email",
    name: "email",
    id: "inputEmail3"
  },
  {
    label: "Имя пользователя",
    variant: "outlined",
    type: "text",
    name: "username",
    id: "username"
  },
  {
    label: "Пароль",
    variant: "outlined",
    type: "password",
    name: "password",
    id: "inputPassword"
  },
  {
    label: "Повторите пароль",
    variant: "outlined",
    type: "password",
    name: "password2",
    id: "inputPassword2"
  },
  {
    label: "Номер телефона",
    variant: "outlined",
    type: "number",
    name: "phone",
    id: "phone"
  }
];

const RegisterForm = ({ auth, history, register_repairer, ...rest }) => {
  const onSubmit = (e, formData) => {
    e.preventDefault();
    register_repairer(formData, history);
  };

  useEffect(() => {
    if (auth) {
      history.push("/home");
    }
  }, [auth, history]);
  return (
    <Form
      {...rest}
      formHeader="Заполните поля для регистрации"
      submit={onSubmit}
      submitTitle="Регистрация"
      inputsData={inputsList}
      inputs={inputs}
    />
  );
};

const mapStateProps = state => ({
  auth: state.repairer.auth
});

const mapDispatchToProps = dispatch => ({
  register_repairer: (formData, history) =>
    dispatch(register_repairer(formData, history))
});

export default connect(
  mapStateProps,
  mapDispatchToProps
)(withRouter(RegisterForm));
