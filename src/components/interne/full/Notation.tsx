import React from "react";
import {
  instanceOfNotationFull,
  NotationFull,
  NotationLight,
} from "../../../interfaces/interface-model";
import Evenement from "./Evenement";
import Place from "./Place";

export default (
  model: NotationFull | NotationLight,
  withEvenement: Boolean = false
) => (
  <div className="Notation" key={`${model.id}`}>
    <div className="Notation-light">
      <div className="Notation-light-note"> {model.note}</div>
    </div>
    {instanceOfNotationFull(model) && (
      <div className="Notation-full">{model.juge}</div>
    )}
  </div>
);
/*

      {withEvenement && <Evenement model={model.evenement} />}
      <Place model={model.place} />

      */
