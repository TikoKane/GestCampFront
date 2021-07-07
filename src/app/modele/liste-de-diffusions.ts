export interface ListeDeDiffusions {
  Id: number;
  Titre: string;
  Reference: string;
  Etat: number;
  IdEntite : string;
  IdNiveauDeVisibilite: string;
  Statut: number;
}

export class UpdateListeDeDiffusions {
 
  Titre: string;
  Reference: string;
  Etat: number;
  IdEntite : string;
  IdNiveauDeVisibilite: string;
  Statut: number;
}
