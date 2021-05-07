import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  headers = new HttpHeaders();
  
  

  getCentros(){
    return this.http.get<Centro[]>(this.urlCentro);
  }
  getPersonasForCentro(id:string){
    console.log('se ejecuto get' + id);
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<Persona[]>(this.urlPersonas + "/forCentro", 
    {
      headers: this.headers,
      body: JSON.stringify({"id":id})
    })
  };
  
}
