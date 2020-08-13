import React from "react";
import {
  ThemeFull,
  EvenementLight,
  ThemeLight,
  instanceOfThemeFull,
} from "../../../interfaces/interface-model";
import Evenement from "./Evenement";

export default (model: ThemeFull | ThemeLight) => (
  <div className="Theme" key={`${model.id}`}>
    <div className="Theme-light">
      <div className="Theme-light-nom">{model.nom}</div>
      <div className="Theme-light-theme">{model.theme}</div>
    </div>
  </div>
);
/*

 {instanceOfThemeFull(model) && (
      <div className="Theme-full">
        <div className="Theme-full-theme">{model.theme}</div>
        {model?.evenements && (
          <div className="Theme-full-evenement">
            {model.evenements.map((ev: EvenementLight) => (
              <Evenement model={ev} />
            ))}
          </div>
        )}
      </div>
    )}

    */
