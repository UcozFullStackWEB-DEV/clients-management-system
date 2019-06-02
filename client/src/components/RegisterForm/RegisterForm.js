import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { register_repairer } from "../../actions/repairer-actions";

const RegisterForm = ({ auth, register_repairer, history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    username: ""
  });

  useEffect(() => {
    if (auth) {
      history.push("/home");
    }
  }, [auth, history]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    register_repairer(formData, history);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="probootstrap-main js-probootstrap-main col-12"
    >
      <h1 className="offset-2">Заповніть поля для реєстрації </h1>
      <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-6">
          <input
            type="email"
            onChange={onChange}
            name="email"
            value={formData.email}
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Пароль
        </label>
        <div className="col-sm-6">
          <input
            type="password"
            onChange={onChange}
            name="password"
            value={formData.password}
            className="form-control"
            id="inputPassword3"
            placeholder="пароль"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="phone" className="col-sm-2 col-form-label">
          Телефон
        </label>
        <div className="col-sm-6">
          <input
            type="text"
            onChange={onChange}
            name="phone"
            value={formData.phone}
            className="form-control"
            id="phone"
            placeholder="телефон"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Пароль
        </label>
        <div className="col-sm-6">
          <input
            type="text"
            onChange={onChange}
            name="username"
            value={formData.username}
            className="form-control"
            id="username"
            placeholder="ім'я користувача"
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-10 text-center">
          <button type="submit" className="btn btn-primary">
            Зареєструватись
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateProps = state => {
  return {
    auth: state.repairer.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register_repairer: (formData, history) =>
      dispatch(register_repairer(formData, history))
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(withRouter(RegisterForm));
