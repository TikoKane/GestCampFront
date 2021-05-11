export interface UtilisateurModelServer {
  Id: Number;
  NomComplet: String;
  Email: String;
  Login: String;
  Password: String;
  Etat: Number;
  Statut: Number;
  IdRole: String;
  Telephone: String;
}


export interface serverResponse  {
  count: number;
  users: UtilisateurModelServer[]
};


export class Authentification {
  login: string;
  password: string;
}