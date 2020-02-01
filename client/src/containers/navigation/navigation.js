import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout_repairer } from "../../actions/repairer-actions";
import Aside from "../../components/Navigation/navigation";

const notAuthLinks = [
  { to: "/", title: "Главная" },
  { to: "/register", title: "Регистрация" }
];

const AsideContainer = ({
  auth,
  open,
  setOpen,
  history,
  logout_repairer,
  ...rest
}) => {
  const authLinks = [
    { to: "/", title: "Главная" },
    { to: "/add-client", title: "Добавить клиента" },
    { to: "/clients", title: "База клиентов" },
    { to: "/login", title: "Выход", click: () => logout_repairer() }
  ];

  return (
    <Aside
      links={auth ? authLinks : notAuthLinks}
      open={open}
      setOpen={setOpen}
    />
  );
};

const mapStateToProps = state => ({
  auth: state.repairer.auth
});

const mapDispatchToProps = dispatch => ({
  logout_repairer: () => dispatch(logout_repairer)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AsideContainer));
