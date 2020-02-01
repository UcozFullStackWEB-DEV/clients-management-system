import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Home = ({ auth, repairer }) => {
  if (auth && !repairer) {
    return <Loader />;
  }

  return (
    <>
      {auth ? (
        <div>
          <h1 className="text-center">Здравствуйте!</h1>
          <div className="profile-userpic text-center">
            <img
              className="rounded"
              style={{ borderRadius: "50%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRhLCAesvQqb9420RaRCtmb-_khcFOdQWYGXFSNE9DMinR0XS"
              alt="avatar"
            />
          </div>
          <div className="profile-usertitle">
            <div className="profile-usertitle-name text-center">
              Вы вошли как: <h2>{repairer.username}</h2>
            </div>
            <div className="profile-usertitle-job" />
          </div>
        </div>
      ) : (
        <div className="profile-usertitle-name">
          <Typography variant="h4">Ви не вошли в систему</Typography>
          <Typography variant="body1">
            Войдите в существующий аккаунт или создайте учетную запись.
          </Typography>
          <div
            style={{
              display: "flex",
              maxWidth: 240,
              justifyContent: "space-between"
            }}
          >
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
            >
              Вход
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/register"
            >
              Регистрация
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
