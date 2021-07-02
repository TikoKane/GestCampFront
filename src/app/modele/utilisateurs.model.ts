export interface UtilisateurModelServer {
  Id: Number;
  Nom: String;
  Prenom : String;
  Email: String;
  Login: String;
  Password: String;
  Etat: Number;
  Statut: Number;
  IdRole: String;
  Telephone: String;
}

export class ChangePassword {
  Amp: string;
  Nmp: string;
  Cnmp: string;
}


export interface UpdateUser {
  nom: String;
  prenom: String;
  email: String;
  telephone : String;
  login: String;
  idRole: number;
  password:string;
  etat:boolean;
  statut:boolean;
  confirmPassword:string;
}


export interface AddUser {
  nom: String;
  prenom: String;
  email: String;
  telephone : String;
  login: String;
  idRole: String;
}
export interface serverResponse  {
  count: number;
  users: UtilisateurModelServer[];
};


export class Authentification {
  login: string;
  password: string;
}
