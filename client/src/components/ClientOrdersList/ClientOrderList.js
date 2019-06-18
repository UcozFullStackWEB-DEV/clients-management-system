import React from "react";
import "./ClientOrderList.css";
import { Link } from "react-router-dom";

export default ({ orders, clientId }) => {
  return (
    <React.Fragment>
      <h2>Список ремонтів</h2>
      {orders.map(order => {
        const { brand, model, description, imei, repairStart, _id } = order;
        return (
          <ul key={_id} className="order-wrap">
            <li>
              <span>Бренд:</span>
              {brand}
            </li>
            <li>
              <span>Модель:</span>
              {model}
            </li>
            <li>
              <span>imei:</span>
              {imei}
            </li>
            <li>
              <span>Дата внесення:</span>
              {repairStart.slice(0, 10)}
            </li>
            <li>
              <span>Опис:</span>
              {description}
            </li>

            <Link to={`/clients/edit-client-order/${clientId}/${_id}`}>
              <i className="fa fa-edit" /> Оновити замовлення
            </Link>
          </ul>
        );
      })}
    </React.Fragment>
  );
};
