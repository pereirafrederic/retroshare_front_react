import React from "react";
import {
  EvenementLight,
  HoldingFull,
  instanceOfHoldingFull,
  Nom,
} from "../../../interfaces/interface-model";
import Evenement from "./Evenement";

export default (model: HoldingFull | Nom) => (
  <div className="Holding" key={`${model.id}`}>
    <div className="Holding-light">{model.nom}</div>
  </div>
);
/*

{instanceOfHoldingFull(model) && (
      <div className="Holding-full">
        {model.evenements.map((ev: EvenementLight) => (
          <Evenement model={ev} />
        ))}
      </div>
    )}

    */
