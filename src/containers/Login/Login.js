import React from "react";
import { useHistory } from "react-router";
import LoginTemplate from "../../components/Login/Login";

const Login = () => {
  const history = useHistory();

  const goBack = () => {
    history.push({
      pathname: "/",
    });
  };

  const goIdLogin = () => {
    history.push({
      pathname: "/loginId",
    });
  };

  return (
    <>
      <LoginTemplate goBack={goBack} goIdLogin={goIdLogin} />
    </>
  );
};

export default Login;
