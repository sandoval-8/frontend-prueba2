import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  private _usuario: Usuario;

  private _token: string;

  loginUrl: string = 'http://localhost:8080/oauth/token';

  //--------------------------------------------------------------------------------

  login(username: string, password: string): Observable<any> { //Observable<HttpResponse<any>>  Cuidado al devolver Objeto

    const client = btoa('angularapp' + ':' + '12345');
    const body = new HttpParams().set('username', username)
      .set('password', password)
      .set('grant_type', 'password');
    const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + client);

    return this.httpClient.post<any>(this.loginUrl, body.toString(), { headers: header });
  }
  //--------------------------------------------------------------------------------
  saveToken(token: string): void {
    localStorage.setItem('token', token); //LocalStorage solo almacena string
  }
  saveUser(token: string): void {
    const payload = this.getUser(token);
    this._usuario = new Usuario();
    this._usuario.nombre = payload.nombre;
    this._usuario.apellido = payload.apellido;
    this._usuario.email = payload.email;
    this._usuario.authorities = payload.authorities;
    console.log(this._usuario);
    localStorage.setItem('user', JSON.stringify(this._usuario));
  }
  getUser(token: string): any {
    if(this.token != null){
      var coso1 = atob(token.split(".")[1]);
      console.log("COSO1:" + coso1);
      var coso2 = JSON.parse(coso1);
      console.log("COSO2:" + coso2);
      return coso2;  //Obteniene el payload, decodifica el token y lo parsea a JSON.
    }
  }

  //-------------------------------------------------------------------------------

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && localStorage.getItem('user') != null) {
      this._usuario = JSON.parse(localStorage.getItem('user')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }
  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && localStorage.getItem('token') != null) {
      this._token = localStorage.getItem('token');
      return this._token;
    }
    return null;
  }
  //--------------------------------------------------------------------------------

  logout():void {
    this._token=null;
    this._usuario=null;
    localStorage.clear;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    let payload = this.getUser(this.token);
    console.log("token:" + JSON.stringify(payload));
    if (payload != null) {
      console.log("Está autenticado!!");
      return true;
    }
    return false;
  }
  hasRoles(roles:string):boolean{
    if(this.usuario.authorities.includes(roles)){
      return true;
    }
    return false;
  }
}
