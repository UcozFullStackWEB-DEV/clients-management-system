import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    border: "2px solid #eee",
    margin: "10px 0"
  }
});

export default ({ orders, clientId }) => {
  const classes = useStyles();
  return (
    <>
      <h2>Список ремонтов</h2>
      {orders.map(order => {
        const { brand, model, description, imei, repairStart, _id } = order;
        return (
          <List key={_id} className={classes.root}>
            <ListItem>
              <Typography variant="subtitle1" gutterBottom>
                Бренд:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {brand}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle1" gutterBottom>
                Модель:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {model}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle1" gutterBottom>
                imei:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {imei}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle1" gutterBottom>
                Дата внесення:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {repairStart.slice(0, 10)}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="subtitle1" gutterBottom>
                Описание:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {description}
              </Typography>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
                component={Link}
                to={`/clients/edit-client-order/${clientId}/${_id}`}
              >
                <EditIcon />
                Изменить прогресс ремонта
              </Button>
            </ListItem>
          </List>
        );
      })}
    </>
  );
};
