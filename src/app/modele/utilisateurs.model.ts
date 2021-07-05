export interface UtilisateurModelServer {
  Id: Number;
  Nom: String;
  Prenom : String;
  Email: String;
<<<<<<< HEAD
  Telephone : String;
=======
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
  Login: String;
  Password: String;
  Etat: Number;
  Statut: Number;
  IdRole: String;
<<<<<<< HEAD
}

=======
  Telephone: String;
  idEntite : String;
}

export class UserModel {
  id: Number;
  Nom: String;
  Prenom : String;
  Email: String;
  IdRole: String;
  Telephone: String;
}


>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
export interface AddUser {
  nom: String;
  prenom: String;
  email: String;
  telephone : String;
  login: String;
  idRole: String;
<<<<<<< HEAD
  idEntite : number;
}
export interface serverResponse  {
  count: number;
  users: UtilisateurModelServer[]
=======
  idEntite: String;
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
  idEntite:string;
}


export interface serverResponse  {
  count: number;
  users: UtilisateurModelServer[];
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
};


export class Authentification {
  login: string;
  password: string;
}

<<<<<<< HEAD
export class Changerpassword{
  Amp : string;
  Nmp : string;
  Cnmp : string;
}
=======

export class Changerpassword {
  Amp: string;
  Nmp: string;
  Cnmp: string;
}
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
