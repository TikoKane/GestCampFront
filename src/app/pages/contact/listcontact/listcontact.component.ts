import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup }   from '@angular/forms';

import { ContactService } from '../../../services/contacts.service';
import { ContactModelServer } from "../../../modele/contacts.model";


@Component({
  selector: 'ngx-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.scss']
})
export class ListcontactComponent implements OnInit {

  contacts:any;

  constructor(
    private ContactService: ContactService,
    private router: Router) {

     }

  ngOnInit(): void {
    this.ContactService.getAllContact().subscribe((data) => {
      this.contacts = data;
      console.log(this.contacts)
    }, (err) => {
      console.log(err);
    });
  }

}
