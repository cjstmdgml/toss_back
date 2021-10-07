import React from "react";
import { useHistory } from "react-router";
import SignUpTemplate from "../../components/SignUp/SignUp";

const SignUp = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <SignUpTemplate goBack={goBack} />
    </>
  );
};

export default SignUp;
