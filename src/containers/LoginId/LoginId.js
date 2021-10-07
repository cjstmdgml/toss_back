import React from "react";
import { useHistory } from "react-router";
import LoginIdTemplate from "../../components/LoginId/LoginId";

const Login = () => {
  const history = useHistory();

  const goBack = () => {
    history.push({
      pathname: "/",
    });
  };

  const goLogin = () => {
    history.push({
      pathname: "/login",
    });
  };

  return (
    <>
      <LoginIdTemplate goBack={goBack} goLogin={goLogin} />
    </>
  );
};

export default Login;
