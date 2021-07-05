import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  CanalEnvois } from '../../../modele/canal-envois';
import { CanalEnvoisService } from '../../../services/canal-envois.service';

@Component({
  selector: 'ngx-addcanalenvoi',
  templateUrl: './addcanalenvoi.component.html',
  styleUrls: ['./addcanalenvoi.component.scss']
})
export class AddcanalenvoiComponent implements OnInit {
  constructor(private canalEnvoiService : CanalEnvoisService) { }

  ngOnInit(): void {
  }

  canal: CanalEnvois = {
    Titre: '',
    Description :'',
    Code : '',
    Etat :1,
    Id : 0

  };
  Ajout(form :NgForm){
    console.log(this.canal)
    this.canalEnvoiService.AddCanalEnvoi(this.canal).subscribe((data) => {
    
      console.log(data)
      form.reset();
    }, (err) => {
      console.log(this.canal)
      console.log(err);
    });
  }
}
