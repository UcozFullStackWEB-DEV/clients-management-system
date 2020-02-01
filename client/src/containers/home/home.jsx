import React from "react";
import { connect } from "react-redux";
import HomePage from "../../components/Home/Home";

const Home = props => {
  const { auth, repairer } = props.repairer;

  return <HomePage auth={auth} repairer={repairer} />;
};

const mapStateToProps = state => ({
  repairer: state.repairer
});

export default connect(mapStateToProps)(Home);
