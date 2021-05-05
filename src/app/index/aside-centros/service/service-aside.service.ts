import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Centro } from 'src/app/Modelo/Centro';

@Injectable({
  providedIn: 'root'
})
export class ServiceAsideService {

  constructor(private http:HttpClient) { }

  urlCentro:string='http://localhost:8080/centros';

  get(){
    console.log('se ejecuto get');
    return this.http.get<Centro[]>(this.urlCentro);
  }
}
