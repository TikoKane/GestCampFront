export class Contacts {
  Id: number;
  NomComplet: string;
  Matricule: string;
  Adresse: string;
  Etat: number;
  Statut: number;
  Pays: string;
  Region: string;
  DateDeNaissance: string;
  Sexe: number;
  Situation: number;
  Profession: string;
  IdNiveauVisibilite: number;
}


export interface Countries {
  code: string
  code3: string
  name: string
  number: string
}