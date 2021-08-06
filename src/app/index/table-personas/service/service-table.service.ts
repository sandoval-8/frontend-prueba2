import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Persona} from '../../../Modelo/Persona';
import { Centro } from 'src/app/Modelo/Centro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTableService {

  constructor(private http:HttpClient) { }

  urlCentro:string='http://localhost:8080/centros';
  urlPersonas:string='http://localhost:8080/user';

  getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlPersonas + "/userAll");
  }
  //-------------------------------------------------------
  getPersonasForCentro(id:string){
    return this.http.post<Persona[]>(this.urlPersonas + "/forCentro",{"id":id});
  }
  //-------------------------------------------------------
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.urlPersonas, persona);
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.urlPersonas+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.urlPersonas+"/"+persona.id, persona);
  }
  //############################################################## 

  getCentros(){
    return this.http.get<Centro[]>(this.urlCentro);
  }
}
