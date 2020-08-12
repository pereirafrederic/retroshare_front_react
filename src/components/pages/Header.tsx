import React, { Fragment } from "react";
import { FlexboxPlacement } from "../../enumeration/Enums";
import Title from "../externe/bulma/Title";
import "./Header.scss";

export default (props: { children?: React.ReactNode }) => (
  <header className="hero Header">
    <Title
      flexboxPlacement={FlexboxPlacement.LEFT}
      title="RetroShare"
      subtitle="le partage de bons plans"
      size={6}
    />
    <Fragment>{props.children}</Fragment>
  </header>
);
