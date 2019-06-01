import React from "react";
import { Redirect } from "react-router-dom";
import Splash from "../components/Splash";

const withSplash = WrappedComponent => props => {
  const isFirstSplash = JSON.parse(sessionStorage.getItem("isSplash"));
  if (!isFirstSplash) {
    return <Redirect to="/logo" />;
  } else {
    return <WrappedComponent {...props} />;
  }
};

export default withSplash;
