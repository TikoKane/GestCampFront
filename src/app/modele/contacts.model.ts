export interface ContactModelServer {
    Id: Number;
    NomComplet: String;
    Matricule: String;
    Adresse: String;
    Etat: Number;
    Statut: Number;
    Pays: String;
    Region: String;
    DateDeNaissance: Date;
    Sexe: Number;
    Situation: Number;
    Profession: String;
    IdNiveauVisibilite: Number;
  }


  
export interface serverResponse  {
    count: number;
    contacts: ContactModelServer[]
  };