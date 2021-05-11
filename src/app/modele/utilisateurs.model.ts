export interface UtilisateurModelServer {
  Id: Number;
  Nom: String;
  Prenom: String;
  Email: String;
  Login: String;
  Password: String;
  Etat: Number;
  Statut: Number;
  IdRole: String;
  Telephone: String;
}

export interface AddUser {
  nom: String;
  prenom: String
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