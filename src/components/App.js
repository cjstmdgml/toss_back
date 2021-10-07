import React from "react";
import { Switch, Route } from "react-router-dom";
import * as Pages from "../pages";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Pages.Home />} />
        <Route exact path="/login" render={() => <Pages.Login />} />
        <Route exact path="/signUp" render={() => <Pages.SignUp />} />
        <Route exact path="/loginId" render={() => <Pages.LoginId />} />
      </Switch>
    </>
  );
};

export default App;
