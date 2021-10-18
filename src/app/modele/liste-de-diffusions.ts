export interface ListeDeDiffusions {
  Id: number;
  Titre: string;
  Reference: string;
  Etat: number;
  IdEntite : string;
  IdNiveauVisibilite: string;
  Statut: number;
}



export interface ListeDeDiffusionsEdit {
  Titre: string;
  IdEntite : string;
  IdNiveauVisibilite: string;
  Reference: string;
}
