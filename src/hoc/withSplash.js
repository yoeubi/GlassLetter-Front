import React from "react";
import { Redirect } from "react-router-dom";

const withSplash = WrappedComponent => props => {
  const item = sessionStorage.getItem("isSplash");
  const isFirstSplash = JSON.parse(item);
  if (!isFirstSplash) {
    return <Redirect to="/logo" />;
  } else {
    return <WrappedComponent {...props} />;
  }
};

export default withSplash;
