import React, { useEffect } from "react";
import { connect } from "react-redux";
import { login_repairer } from "../../actions/repairer-actions";
import Form from "../../components/Form/form";

const inputsList = {
  email: "",
  password: ""
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
    label: "Пароль",
    variant: "outlined",
    type: "password",
    name: "password",
    id: "inputPassword"
  }
];

const LoginForm = ({ auth, login_repairer, history, errors }) => {
  useEffect(() => {
    if (auth) {
      history.push("/");
    }
  }, [auth, history]);

  const onSubmit = (e, formData) => {
    e.preventDefault();
    login_repairer(formData);
  };

  return (
    <Form
      inputs={inputs}
      inputsData={inputsList}
      submit={onSubmit}
      submitTitle="войти"
      formHeader="Заполните поля для входа"
    />
  );
};

const mapStateProps = state => {
  return {
    auth: state.repairer.auth,
    errors: state.repairer.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login_repairer: formData => dispatch(login_repairer(formData))
  };
};

export default connect(mapStateProps, mapDispatchToProps)(LoginForm);
