import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { $ } from 'protractor';

import { LoginService } from './service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private loginService:LoginService, private router:Router) { }
  //, private cookieService:CookieService YA NO VAMOS A PRESCINDIR DE LAS COOKIES

  username:string;
  password: string;

  ngOnInit(): void {
    if(this.loginService.isAuthenticated()){
      this.router.navigate(['/']);
    }
  }
  
  login():void { //ACA TENEMOS QUE LLAMAR AL SERVICIO QUE DEVUELVA UN Observable<any>

    //Verificamos que los campos no sean null
    if(this.username == null || this.password == null){
      console.log("El campo nombre de usuario y contraseña no pueden estar vacios");
      return;
    }
    this.loginService.login(this.username, this.password).subscribe(resp => {
      console.log(resp.access_token);
      this.loginService.saveToken(resp.access_token); //Guardamos el token
      this.loginService.saveUser(resp.access_token); //Guardamos el usuario
      this.router.navigate(['/']);
    }, error => {
      if(error.status == 400){
        console.log("Credenciales Invalidas status:400");
      }
    }); 
  }

}
