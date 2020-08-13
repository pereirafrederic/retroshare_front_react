import React from "react";
import {
  instanceOfUtilisateurFull,
  UtilisateurFull,
  UtilisateurLight,
} from "../../../interfaces/interface-model";
import Notation from "./Notation";
import Place from "./Place";

export default (model: UtilisateurFull | UtilisateurLight) => (
  <div className="Utilisateur" key={`${model.id}`}>
    <div className="Utilisateur-light">
      <div className="Utilisateur-light-pseudo"> {model.pseudo} </div>
      <div className="Utilisateur-light-nom"> {model.nom} </div>
      <div className="Utilisateur-light-dateNaissance">
        {model.dateNaissance}
      </div>
      <div className="Utilisateur-light-description"> {model.description} </div>
      <div className="Utilisateur-light-email"> {model.email}</div>
      <div className="Utilisateur-light-numeroTelephone">
        {model.numeroTelephone}
      </div>
    </div>
  </div>
);
/*
{instanceOfUtilisateurFull(model) && (
      <div className="Utilisateur-full">
        <div className="Utilisateur-full-places">
          {model?.places?.map((place) => (
            <Place model={place} withEvenement={true} />
          ))}
        </div>
        <div className="Utilisateur-full-notations">
          {model?.notations?.map((notation) => (
            <Notation model={notation} withEvenement={true} />
          ))}
        </div>
      </div>
    )}

*/
