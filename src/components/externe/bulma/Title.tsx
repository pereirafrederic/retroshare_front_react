import React from "react";
import { FlexboxPlacement, TitleType } from "../../../enumeration/Enum-css";
import "./Title.scss";

interface IProps {
  title: any;
  subtitle?: any;
  size: number;
  flexboxPlacement?: FlexboxPlacement;
}

export default ({
  title,
  subtitle,
  size,
  flexboxPlacement = FlexboxPlacement.CENTER,
}: IProps) => (
  <div className={`Bulma-Title Bulma-Title-${flexboxPlacement}`}>
    <div className={`${TitleType.TITLE} is-${size} `}>{title}</div>
    {subtitle && (
      <div className={`${TitleType.SUBTITLE} is-${size + 2}`}>{subtitle}</div>
    )}
  </div>
);
