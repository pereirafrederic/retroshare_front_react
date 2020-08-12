import React from "react";
import { LieuFull } from "../../../interfaces/interface-model";
import Evenement from "./Evenement";

export default (model: LieuFull) => (
  <div className="Lieu" key={model.id}>
    <div className="Lieu-light">
      <div className="Lieu-light-Latitude">{model.Latitude}</div>
      <div className="Lieu-light-Longitude">{model.Longitude}</div>
    </div>
    <div className="Lieu-full">
      {model.evenements.map((ev) => (
        <Evenement model={ev} />
      ))}
    </div>
  </div>
);
