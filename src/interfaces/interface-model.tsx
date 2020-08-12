import {
  EvenementStatut,
  PlaceMotifRefus,
  PlaceStatut,
  PlaceType,
} from "../enumeration/enum-model";

export interface Commun {
  id: Number;
}

export interface Nom extends Commun {
  nom: String;
}
export interface Periode {
  dateDebut: Date;
  dateFin: Date;
}

export interface ThemeLight extends Nom {
  theme: String;
}

export interface UtilisateurLight extends Nom {
  pseudo: String;
  dateNaissance: Date;
  email: String;
  numeroTelephone: String;
  description: String;
}

export interface PlaceLight extends Commun {
  typePlace: PlaceType;
  statut: PlaceStatut;
  motifRefus: PlaceMotifRefus;
  prix: Number;
}
export interface NotationLight {
  place: PlaceLight;

  evenement: EvenementLight;

  note: Number;
}

export interface LieuLight {
  Latitude: Number;
  Longitude: Number;
}

export interface EvenementLight extends Periode, Nom {
  organisateur: UtilisateurLight;
  statut: EvenementStatut;
  description: String;
  lieu: LieuLight;
  holding: Nom;
  theme: ThemeLight;
}

export interface EvenementFull extends EvenementLight {
  places: Array<PlaceLight>;
  notations: Array<NotationLight>;
}
export interface HoldingFull extends Nom {
  evenements: Array<EvenementLight>;
}
export interface LieuFull extends LieuLight {
  evenements: Array<EvenementLight>;
}
export interface NotationFull extends NotationLight {
  juge: Array<EvenementLight>;
}

export interface PlaceFull extends PlaceLight {
  utilisateur: UtilisateurLight;
  evenement: EvenementLight;
}

export interface ThemeFull extends ThemeLight {
  evenements: Array<EvenementLight>;
}

export interface UtilisateurFull extends UtilisateurLight {
  pseudo: String;
  notations: Array<NotationLight>;
  places: Array<PlaceLight>;
}
