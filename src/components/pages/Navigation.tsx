import React, { Fragment } from "react";
import { NavLink } from "../../interfaces/interface-props";
import "./Navigation.scss";

export default (props: {
  children?: React.ReactNode;
  navLinks: Array<NavLink>;
}) => (
  <nav className="Navigation">
    {props.navLinks.map((nav: NavLink) => (
      <a href={nav.href} key={nav.href}>
        <div className="Navigation-link">
          <div className="Navigation-link-icon">{nav.img}</div>
          <div className="Navigation-link-texte">{nav.texte}</div>
        </div>
      </a>
    ))}
    <Fragment>{props.children}</Fragment>
  </nav>
);
