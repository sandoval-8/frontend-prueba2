import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Centro } from 'src/app/Modelo/Centro';
import { Persona } from 'src/app/Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceAsideService {

  constructor(private http:HttpClient) { }

  urlCentro:string='http://localhost:8080/centros';

  urlPersonas:string='http://localhost:8080/user';  
  

  getCentros(){
    return this.http.get<Centro[]>(this.urlCentro);
  }
  getPersonasForCentro(id:string){
//    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<Persona[]>(this.urlPersonas + "/forCentro",{"id":id});
/*    const request = new HttpRequest("POST",this.urlPersonas + "/forCentro",{"id":id});
    return this.http.request(request); */
  };
  
}
