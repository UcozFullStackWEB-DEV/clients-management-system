import React from 'react';
import './Clients.css';

const Clients = props => {
    return (
        <div className="container bootstrap snippet probootstrap-main js-probootstrap-main">
        <div className="row">
          <div className="col-lg-12">
          <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Навігація</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Введіть дані клієнта" aria-label="Search" />
          <button className="btn btn-outline-success" style={{padding:"15px 30px"}} type="submit">Пошук</button>
        </form>
      </nav>
            <div className="main-box no-header clearfix">
              <div className="main-box-body clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th><span>Користувач</span></th>
                        <th><span>Ремонти</span></th>
                        <th className="text-center"><span>Активні</span></th>
                        <th><span>Телефон</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src="https://bootdey.com/img/Content/user_1.jpg" alt />
                          <a href="#" className="user-link">Петро Порошкевич</a>
                        </td>
                        <td>3</td>
                        <td className="text-center">
                          <span className="label label-default">1</span>
                        </td>
                        <td>
                          <a href="#">063-666-66-66</a>
                        </td>
                        <td style={{width: '20%'}}>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="https://bootdey.com/img/Content/user_3.jpg" alt />
                          <a href="#" className="user-link">Full name 2</a>
                          <span className="user-subhead">Admin</span>
                        </td>
                        <td>2013/08/12</td>
                        <td className="text-center">
                          <span className="label label-success">Active</span>
                        </td>
                        <td>
                          <a href="#">marlon@brando.com</a>
                        </td>
                        <td style={{width: '20%'}}>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="https://bootdey.com/img/Content/user_2.jpg" alt />
                          <a href="#" className="user-link">Full name 3</a>
                          <span className="user-subhead">Member</span>
                        </td>
                        <td>2013/08/12</td>
                        <td className="text-center">
                          <span className="label label-danger">inactive</span>
                        </td>
                        <td>
                          <a href="#">marlon@brando.com</a>
                        </td>
                        <td style={{width: '20%'}}>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Clients;