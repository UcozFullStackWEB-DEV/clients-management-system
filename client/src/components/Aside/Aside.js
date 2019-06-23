import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout_repairer } from "../../actions/repairer-actions";

const renderLinks = links => {
  return (
    <div className="probootstrap-overflow">
      <nav className="probootstrap-nav">
        <ul>
          {links.map((link, i) => (
            <li
              key={i}
              className="probootstrap-animate"
              data-animate-effect="fadeInLeft"
            >
              <Link onClick={link.click} to={link.to}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Aside = ({ auth, logout_repairer }) => {
  const authLinks = [
    { to: "/", title: "Головна" },
    { to: "/add-client", title: "Додати клієнта" },
    { to: "/clients", title: "База клієнтів" },
    { to: "/login", title: "Вихід", click: logout_repairer }
  ];

  const notAuthLinks = [
    { to: "/", title: "Головна" },
    { to: "/register", title: "Реєстрація" }
  ];

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
      {auth ? renderLinks(authLinks) : renderLinks(notAuthLinks)}
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
