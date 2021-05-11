import { Component, OnInit } from '@angular/core';
import { countries } from '../../../services/country-data-store';

@Component({
  selector: 'ngx-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
text;
  constructor() { }

  public countries:any = countries
  ngOnInit(): void {
  }

}
