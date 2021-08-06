import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-prueba2';

//  constructor(private router:Router){}

  constructor(public loginService:LoginService, private router:Router){}

  logout(){
    //Eliminar el token
    console.log("Se cerro sesion ... en teoria");
    this.loginService.logout();
    this.router.navigate(['/login']);

  }
/*  Nuevo(){
    this.router.navigate(["add"]);
  } */
}
