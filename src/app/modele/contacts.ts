export class Contacts {
  Id: number;
  Nom: string;
  Prenom:string;
<<<<<<< HEAD
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
}


=======
  Etat: boolean;
  Statut: boolean;
  Pays: string;
  DateDeNaissance: Date;
  Sexe: string;
  Adresse:string
  Situation: string;
  Profession: string; 
  IdNiveauVisibilite: string;
  IdUser : string;
}


export class ContactsUpdate {
  
  DateDeNaissance: string;

}

>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
export interface Countries {
  code: string
  code3: string
  name: string
  number: string
}

export interface contactCanalInfo{
  facebook : string;
  whatsapp : string;
  telephone : string;
  mail:string;
}