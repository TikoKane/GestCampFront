export class Contacts {
  Id: number;
  Nom: string;
  Prenom:string;
  Etat: number;
  Statut: number;
  Pays: string;
  DateDeNaissance: Date;
  Sexe: boolean;
  Adresse:string;
  Situation: string;
  Profession: string;
  IdNiveauVisibilite: number;
  IdUser: number;
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