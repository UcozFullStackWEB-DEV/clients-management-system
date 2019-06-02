import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Home = props => {
  const {
    auth,
    loading,
    repairer: { username }
  } = props.repairer;
  console.log(props);

  if (loading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <div className="profile-sidebar probootstrap-main probootstrap-bar">
        {auth ? (
          <div>
            <h1 className="text-center">Ласкаво просимо!</h1>
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
                Ви увійшли як: <h2>{username}</h2>
              </div>
              <div className="profile-usertitle-job" />
            </div>
          </div>
        ) : (
          <div className="profile-usertitle">
            <div className="profile-usertitle-name">
              <h3>Ви не аутентифіковані</h3>
              <p>
                Увійдіть в існуючий аккаунт ,або пройдіть процедуру реєстрації
              </p>
              <Link to="/login">
                <button className="btn btn-primary mr-2">Логін</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-secondary">Реєстрація</button>
              </Link>
            </div>
            <div className="profile-usertitle-job" />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    repairer: state.repairer
  };
};

export default connect(mapStateToProps)(Home);
