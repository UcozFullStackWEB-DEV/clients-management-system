import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout_repairer } from "../../actions/repairer-actions";

const Aside = ({ auth, logout_repairer }) => {
  if (!auth) {
    return (
      <aside className="probootstrap-aside js-probootstrap-aside">
        <Link
          to="#"
          className="probootstrap-close-menu js-probootstrap-close-menu d-md-none"
        >
          <span className="oi oi-arrow-left" /> Close
        </Link>
        <div
          className="probootstrap-site-logo probootstrap-animate"
          data-animate-effect="fadeInLeft"
        >
          <Link to="/" className="mb-2 d-block probootstrap-logo">
            <i style={{ fontSize: 34 }} className="fa fa-home" />
          </Link>
        </div>
        <div className="probootstrap-overflow">
          <nav className="probootstrap-nav">
            <ul>
              <li
                className="probootstrap-animate active"
                data-animate-effect="fadeInLeft"
              >
                <Link to="/login">Логін</Link>
              </li>
              <li
                className="probootstrap-animate"
                data-animate-effect="fadeInLeft"
              >
                <Link to="/register">Реєстрація</Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
  return (
    <aside className="probootstrap-aside js-probootstrap-aside">
      <Link
        to="#"
        className="probootstrap-close-menu js-probootstrap-close-menu d-md-none"
      >
        <span className="oi oi-arrow-left" /> Close
      </Link>
      <div
        className="probootstrap-site-logo probootstrap-animate"
        data-animate-effect="fadeInLeft"
      >
        <Link to="/" className="mb-2 d-block probootstrap-logo">
          <i style={{ fontSize: 34 }} className="fa fa-home" />
        </Link>
      </div>
      <div className="probootstrap-overflow">
        <nav className="probootstrap-nav">
          <ul>
            <li
              className="probootstrap-animate active"
              data-animate-effect="fadeInLeft"
            >
              <Link to="/">Головна</Link>
            </li>
            <li
              className="probootstrap-animate"
              data-animate-effect="fadeInLeft"
            >
              <Link to="/add-client">Додати клієнта</Link>
            </li>
            <li
              className="probootstrap-animate"
              data-animate-effect="fadeInLeft"
            >
              <Link to="/clients">База клієнтів</Link>
            </li>
            <li
              className="probootstrap-animate"
              data-animate-effect="fadeInLeft"
              onClick={logout_repairer}
            >
              <Link to="/login">Вихід</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.repairer.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout_repairer: () => dispatch(logout_repairer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Aside));
