import React from "react";
import { Link } from "react-router-dom";

export default ({ clients }) => {
  if (!clients.length) {
    return (
      <div>
        <h1>Клієнти відсутні </h1>
      </div>
    );
  }
  return (
    <div className="main-box no-header clearfix">
      <div className="main-box-body clearfix">
        <div className="table-responsive">
          <table className="table user-list">
            <thead>
              <tr>
                <th>
                  <span>Користувач</span>
                </th>
                <th>
                  <span>Ремонти</span>
                </th>
                <th className="text-center">
                  <span>Активні</span>
                </th>
                <th>
                  <span>Телефон</span>
                </th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => {
                const { name, surname, phone, _id, orders } = client;
                return (
                  <tr key={_id}>
                    <td>
                      <img
                        src="https://bootdey.com/img/Content/user_1.jpg"
                        alt="img"
                      />
                      <Link to={`/clients/${_id}`} className="user-link">
                        {` ${name} ${surname} `}
                      </Link>
                    </td>
                    <td>{orders.length}</td>
                    <td className="text-center">
                      <span className="label label-default">1</span>
                    </td>
                    <td>
                      <span>{phone}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
