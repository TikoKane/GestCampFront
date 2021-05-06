import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentification } from '../../modele/utilisateurs.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin : Boolean;
  users;
  constructor(private router : Router,private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn =false;
  }
  login(form: NgForm){

   const credentials: Authentification= {
      login: form.value.login,
      password: form.value.password
    }
  this.authService.login(credentials).subscribe((data) => {
    this.users = data;
    console.log(this.users)
    this.authService.saveToken(this.users.token,this.users.user.nomComplet)

    this.router.navigate(['pages']);
  }, (err) => {
   // this.router.navigate(['pages']);
    console.log(err);
   this.invalidLogin =true;
 form.resetForm();
   
  });
}
}
