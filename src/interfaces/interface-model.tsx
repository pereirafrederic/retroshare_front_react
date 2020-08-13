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
export interface NotationLight extends Commun {
  place: PlaceLight;
  evenement: EvenementLight;
  note: Number;
}

export interface LieuLight extends Commun {
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
export function instanceOfEvenementFull(object: any): object is EvenementFull {
  return "notations" in object;
}

export interface HoldingFull extends Nom {
  evenements: Array<EvenementLight>;
}

export function instanceOfHoldingFull(object: any): object is HoldingFull {
  return "evenements" in object;
}

export interface LieuFull extends LieuLight {
  evenements: Array<EvenementLight>;
}
export function instanceOfLieuFull(object: any): object is LieuFull {
  return "evenements" in object;
}

export interface NotationFull extends NotationLight {
  juge: Array<EvenementLight>;
}
export function instanceOfNotationFull(object: any): object is NotationFull {
  return "juge" in object;
}

export interface PlaceFull extends PlaceLight {
  utilisateur: UtilisateurLight;
  evenement: EvenementLight;
}
export function instanceOfPlaceFull(object: any): object is PlaceFull {
  return "evenement" in object;
}

export interface ThemeFull extends ThemeLight {
  evenements: Array<EvenementLight>;
}

export function instanceOfThemeFull(object: any): object is ThemeFull {
  return "evenements" in object;
}

export interface UtilisateurFull extends UtilisateurLight {
  /*
  pas de pseudo dans le full=> corriger le back
  */
  notations: Array<NotationLight>;
  places: Array<PlaceLight>;
}

export function instanceOfUtilisateurFull(
  object: any
): object is UtilisateurFull {
  return "places" in object;
}
