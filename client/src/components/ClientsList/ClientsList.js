import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

export default ({ clients }) => {
  if (!clients.length) {
    return (
      <div>
        <h1>Клієнти відсутні </h1>
      </div>
    );
  }
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Користувач</TableCell>
            <TableCell>Ремонти</TableCell>
            <TableCell>Активні</TableCell>
            <TableCell>Телефон</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => {
            const { name, surname, phone, _id, orders } = client;
            return (
              <TableRow key={_id}>
                <TableCell>
                  <Avatar
                    src="https://bootdey.com/img/Content/user_1.jpg"
                    alt="img"
                  />
                  <Link
                    component={RouterLink}
                    to={`/clients/${_id}`}
                  >{` ${name} ${surname} `}</Link>
                </TableCell>
                <TableCell>{orders.length}</TableCell>
                <TableCell>1</TableCell>
                <TableCell>{phone}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
