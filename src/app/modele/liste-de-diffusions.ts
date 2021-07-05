<<<<<<< HEAD
export class ListeDeDiffusions {
=======
export interface ListeDeDiffusions {
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
  Id: number;
  Titre: string;
  Reference: string;
  Etat: number;
<<<<<<< HEAD
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
=======
  IdEntite : string;
  NiveauDeVisibilite: string;
  Statut: number;
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
}
