import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


const Aside = ({auth,history}) => {
    if(!auth) {
      return  (
        <aside className="probootstrap-aside js-probootstrap-aside">
        <a href="#" className="probootstrap-close-menu js-probootstrap-close-menu d-md-none"><span className="oi oi-arrow-left"></span> Close</a>
        <div className="probootstrap-site-logo probootstrap-animate" data-animate-effect="fadeInLeft">
          <a href="index.html" className="mb-2 d-block probootstrap-logo">Aside</a>
        </div>
        <div className="probootstrap-overflow">
          <nav className="probootstrap-nav">
            <ul>
              <li className="probootstrap-animate active" data-animate-effect="fadeInLeft"><Link to="/login">Логін</Link></li>
              <li className="probootstrap-animate" data-animate-effect="fadeInLeft"><Link to="/register">Реєстрація</Link></li>
            </ul>
          </nav>
        </div>
      </aside>
      )
    }
    return (
        <aside className="probootstrap-aside js-probootstrap-aside">
        <a href="#" className="probootstrap-close-menu js-probootstrap-close-menu d-md-none"><span className="oi oi-arrow-left"></span> Close</a>
        <div className="probootstrap-site-logo probootstrap-animate" data-animate-effect="fadeInLeft">
          <a href="index.html" className="mb-2 d-block probootstrap-logo">Aside</a>
        </div>
        <div className="probootstrap-overflow">
          <nav className="probootstrap-nav">
            <ul>
              <li className="probootstrap-animate active" data-animate-effect="fadeInLeft"><Link to="/">Головна</Link></li>
              <li className="probootstrap-animate" data-animate-effect="fadeInLeft"><Link to="/add-client">Додати клієнта</Link></li>
              <li className="probootstrap-animate" data-animate-effect="fadeInLeft"><Link to="/clients">База клієнтів</Link></li>
            </ul>
          </nav>
        </div>
      </aside>
    )
}

const mapStateToProps = state => {
  return {
    auth : state.repairer.auth
  }
}

export default connect(mapStateToProps)(withRouter(Aside));