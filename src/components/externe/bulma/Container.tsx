import React from "react";

export default (props: { children: React.ReactNode; fuild: boolean }) => (
  <div className={`container ${props.fuild ? "is-fluid" : ""}`}>
    {props.children}
  </div>
);
