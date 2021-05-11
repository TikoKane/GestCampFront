export interface UtilisateurModelServer {
  Id: Number;
  NomComplet: String;
  Email: String;
  Telephone : String;
  Login: String;
  Password: String;
  Etat: Number;
  Statut: Number;
  IdRole: String;
  Telephone: String;
}

export interface AddUser {
  nomComplet: String;
  email: String;
  telephone : String;
  login: String;
  idRole: String;
}
export interface serverResponse  {
  count: number;
  users: UtilisateurModelServer[]
};


export class Authentification {
  login: string;
  password: string;
}