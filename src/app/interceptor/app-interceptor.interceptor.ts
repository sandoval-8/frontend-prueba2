import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login/service/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private router: Router) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //    const token:string = this.cookieService.get('Authorization'); //Si retorna boolean, porque reservo string?
    //  const token:boolean = this.cookieService.check('token');
    const token: string = localStorage.getItem('token');

    let request = req;

    if (this.loginService.isAuthenticated()) {
      console.log("Está autenticado");
      request = req.clone({
        setHeaders: {
          "Authorization": `Bearer ${token}`
        }
      });
    } else {
      console.log("No está autenticado");
    }
    return next.handle(request);
    /*    if (token) {
          console.log("existe el token");
          console.log((this.cookieService.get("JSESSIONID")).toString);
          request = req.clone({
            setHeaders: {
              "Set-cookie": this.cookieService.get("JSESSIONID"),
              "Access-Control-Allow-Headers" : "Authorization, Content-Type",
              "Access-Control-Allow-Origin": "http://localhost:8080",
              "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
              "Content-Type":"application/json",
              "Authorization": `${token}`
            }
          });
          console.log("cookie:id=" + this.cookieService.get("JSESSIONID")); 
        } */

  }
}
