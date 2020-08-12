import React from "react";
import {
  EvenementLight,
  HoldingFull,
} from "../../../interfaces/interface-model";
import Evenement from "./Evenement";

export default (model: HoldingFull) => (
  <div className="Holding" key={model.id}>
    <div className="Holding-light">{model.nom}</div>
    <div className="Holding-full">
      {model.evenements.map((ev: EvenementLight) => (
        <Evenement model={ev} />
      ))}
    </div>
  </div>
);
