import React from "react";
import {
  EvenementFull,
  EvenementLight,
  instanceOfEvenementFull,
  NotationLight,
  PlaceLight,
} from "../../../interfaces/interface-model";
import Notation from "./Notation";
import Place from "./Place";

export default (model: EvenementFull | EvenementLight) => (
  <div className="Evenement" key={`${model.id}`}>
    <div className="Evenement-light">
      <div className="Evenement-light-nom"> {model.nom}</div>
      <div className="Evenement-light-description"> {model.description}</div>
      <div className="Evenement-light-statut"> {model.statut}</div>
      <div className="Evenement-light-holding"> {model.holding}</div>
      <div className="Evenement-light-organisateur"> {model.organisateur}</div>
      <div className="Evenement-light-theme"> {model.theme}</div>
      <div className="Evenement-light-lieu"> {model.lieu}</div>
      <div className="Evenement-light-dateDebut"> {model.dateDebut}</div>
      <div className="Evenement-light-dateFin"> {model.dateFin}</div>
    </div>
  </div>
);

/*
{instanceOfEvenementFull(model) && (
      <div className="Evenement-full">
        <div className="Evenement-full-places">
          {!!model.places &&
            !!model.places.map((place: PlaceLight) => <Place model={place} />)}
        </div>
        <div className="Evenement-full-notations">
          {
            !!model?.notations.map((notation: NotationLight) => (
              <Notation model={notation} />
            ))
          }
        </div>
      </div>
    )}
    
    */
