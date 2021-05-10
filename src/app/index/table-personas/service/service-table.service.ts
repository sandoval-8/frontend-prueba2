import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Persona} from '../../../Modelo/Persona'

@Injectable({
  providedIn: 'root'
})
export class ServiceTableService {

  persona:Persona[];

  constructor(private http:HttpClient) { }

  urlPerson:string='http://localhost:8080/user';

  getPersonas(){
    return this.http.get<Persona[]>(this.urlPerson + "/userAll");
  }
  //-------------------------------------------------------
  getPersonasForCentro(id:string){
    return this.http.post<Persona[]>(this.urlPerson + "/forCentro",{"id":id});
  }
  //-------------------------------------------------------
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.urlPerson, persona);
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.urlPerson+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.urlPerson+"/"+persona.id, persona);
  }
}
