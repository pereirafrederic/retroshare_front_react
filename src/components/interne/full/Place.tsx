import React from "react";
import {
  instanceOfPlaceFull,
  PlaceFull,
  PlaceLight,
} from "../../../interfaces/interface-model";
import Evenement from "./Evenement";

export default (
  model: PlaceFull | PlaceLight,
  withEvenement: Boolean = false
) => (
  <div className="Place" key={`${model.id}`}>
    <div className="Place-light">
      <div className="Place-light-typePlace"> {model.typePlace}</div>
      <div className="Place-light-statut"> {model.statut}</div>
      <div className="Place-light-prix"> {model.prix}</div>
      <div className="Place-light-motifRefus"> {model.motifRefus}</div>
    </div>
    {instanceOfPlaceFull(model) && (
      <div className="Place-full">{model.utilisateur}</div>
    )}
  </div>
);
/*
 {instanceOfPlaceFull(model) && withEvenement && (
      <Evenement model={model.evenement} />
    )}
    */
