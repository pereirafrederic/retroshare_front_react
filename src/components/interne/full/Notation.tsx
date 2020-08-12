import React from "react";
import {
  NotationFull,
  NotationLight,
} from "../../../interfaces/interface-model";
import Evenement from "./Evenement";
import Place from "./Place";

export default (model: NotationFull, withEvenement: Boolean = false) => (
  <div className="Notation"  key={model.id}>
    <div className="Notation-light">
      {withEvenement && <Evenement model={model.evenement} />}
      <Place model={model.place} />
      <div className="Notation-light-note"> {model.note}</div>
    </div>
    <div className="Notation-full">{model.juge}</div> <-- whats ??
  </div>
);
