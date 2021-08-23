export class Contacts {
  Id: number;
  Nom: string;
  Prenom:string;
  Etat: boolean;
  Statut: boolean;
  Pays: string;
  DateDeNaissance: Date;
  Sexe: string;
  Adresse:string
  Situation: string;
  Profession: string; 
  IdNiveauVisibilite: string;
  IdUser : string;
  IdEntite:string;
}


export class ContactsUpdate {
  Nom: string;
  Prenom:string;
  Etat: boolean;
  Statut: boolean;
  DateDeNaissance: string;
  Sexe: string;
  Adresse:string
  Situation: string;
  Profession: string; 
  IdNiveauVisibilite: string;
  IdUser : string;
  IdEntite:string;
  Matricule:string;

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