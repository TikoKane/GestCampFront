import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddContact, ContactModelServer } from '../../../modele/contacts.model';
import { ContactService } from '../../../services/contacts.service';
import { Countries } from '../../../modele/contacts';
import { countries } from '../../../services/country-data-store';

@Component({
  selector: 'ngx-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
text;
firstForm: FormGroup;
secondForm: FormGroup;
thirdForm: FormGroup;
  constructor(
    private ContactService: ContactService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public countries:any = countries
  ngOnInit(): void {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  
    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

        // Récupérer tous les roles
  }

  // Ajout d'un contact
  /*
  user: AddContact = {
    nomComplet: '',
    DateDeNaissance: '',
    Adresse: '',
    Profession: '',
    Pays: '',
    Region: '',
    Sexe: '',
    Situation: ''
  };  
  */
 /*
  Ajout(form :NgForm){
    this.ContactService.AddContact(this.user).subscribe((data) =>{

      console.log(data)
      form.reset();
    }, (err) => {
      console.log(this.user)
      console.log(err);
    });
  }
  */
  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }
  
  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

}
