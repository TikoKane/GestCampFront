export interface ListeDeDiffusions {
  Id: number;
  Titre: string;
  Reference: string;
  Etat: number;
  IdEntite : string;
  IdNiveauVisibilite: string;
  Statut: number;
}

export class UpdateListeDeDiffusions {
 
  Titre: string;
  Reference: string;
  Etat: number;
  IdEntite : string;
  IdNiveauVisibilite: string;
  Statut: number;
}
