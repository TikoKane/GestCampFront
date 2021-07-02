export class ListeDeDiffusions {
  Id: number;
  Titre: string;
  Reference: string;
  Etat: number;
  Statut: number;
  IdNiveauVisibilite: number;
  IdEntite : number;
}

export interface Contacts {
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
