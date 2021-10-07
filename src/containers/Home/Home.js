import React from "react";
import { useHistory } from "react-router";
import HomeTemplate from "../../components/Home/Home";

const Home = () => {
  const history = useHistory();

  const goLogin = () => {
    history.push({
      pathname: "/login",
    });
  };

  const goSignUp = () => {
    history.push({
      pathname: "/signUp",
    });
  };

  return (
    <>
      <HomeTemplate goLogin={goLogin} goSignUp={goSignUp} />
    </>
  );
};

export default Home;
