import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ClientOrdersList from "../ClientOrdersList/ClientOrderList";
import Loader from "../Loader/Loader";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

const ClientProfile = ({ client, clientLoading }) => {
  if (clientLoading) {
    return <Loader />;
  }
  const { name, surname, phone, _id, orders } = client;
  return (
    <div className="probootstrap-main js-probootstrap-main col-12">
      <Table className="table">
        <TableHead className="thead-dark">
          <TableRow>
            <TableCell scope="col">Имя</TableCell>
            <TableCell scope="col">Фамилия</TableCell>
            <TableCell scope="col">Номер телефона</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{surname}</TableCell>
            <TableCell>{phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        variant="contained"
        component={Link}
        to={`add-client-order/${_id}`}
        color="secondary"
        style={{ margin: "20px 0" }}
      >
        <AddIcon />
        Добавить ремонт
      </Button>

      <ClientOrdersList clientId={_id} orders={orders} />
    </div>
  );
};

ClientProfile.propTypes = {
  client: PropTypes.object,
  clientLoading: PropTypes.bool
};
export default ClientProfile;
