import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default ({ children, ...rest }) => {
  let token = useSelector((state) => state.user.token);
  let history = useHistory();
  if (!token || token === "") {
    history.push("/login");
    return null;
  } else {
    return <Route {...rest}>{children}</Route>;
  }
};
