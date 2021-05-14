import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
public countries:any = countries;
constructor(private fb: FormBuilder) {
}

ngOnInit() {
  this.firstForm = this.fb.group({
    firstCtrl: ['', Validators.required],
  });

  this.secondForm = this.fb.group({
    secondCtrl: ['', Validators.required],
  });

  this.thirdForm = this.fb.group({
    thirdCtrl: ['', Validators.required],
  });
}

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
