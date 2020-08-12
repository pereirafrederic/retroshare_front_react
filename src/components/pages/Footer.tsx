import React from "react";
import "./Footer.scss";

export default (props: { children: React.ReactNode }) => (
  <footer className="Footer">{props.children}</footer>
);
