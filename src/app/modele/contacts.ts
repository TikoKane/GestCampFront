export class Contacts {
  Id: number;
  Nom: string;
  Prenom:string;
  Etat: boolean;
  Statut: boolean;
  Pays: string;
  DateDeNaissance: string;
  Sexe: string;
  Adresse:string;
  Situation: string;
  Profession: string;
  IdNiveauVisibilite: number;
  IdUser : string;
}

export interface UpdateContact{
  Nom: string;
  Prenom:string;
  Etat: boolean;
  Statut: boolean;
  Pays: string;
  DateDeNaissance: string;
  Sexe: string;
  Adresse:string
  Situation: string;
  Profession: string;
  IdNiveauVisibilite: number;
  IdUser : string;
}

export interface AddContact{
  Nom: string;
  Prenom:string;
  Etat: boolean;
  Statut: boolean;
  Pays: string;
  DateDeNaissance: string;
  Sexe: string;
  Adresse:string
  Situation: string;
  Profession: string;
}

export interface Countries {
  code: string
  code3: string
  name: string
  number: string
}

export interface contactCanalInfo{
  facebook : string;
  whatsapp : string;
  telephone : string;
  mail:string;
}


export interface serverResponse  {
  count: number;
  users: Contacts[];
}
