import React, { Fragment } from "react";
import "./Header.scss";

export default (props: { children?: React.ReactNode }) => (
  <header className="hero Header">
    <Fragment>{props.children}</Fragment>
  </header>
);
