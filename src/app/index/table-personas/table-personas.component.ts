import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceTableService } from './service/service-table.service'

@Component({
  selector: 'app-table-personas',
  templateUrl: './table-personas.component.html',
  styleUrls: ['./table-personas.component.css']
})
export class TablePersonasComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServiceTableService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }
  Editar(Persona2:Persona):void{
    localStorage.setItem("id", Persona2.id.toString());
    this.router.navigate(["edit"]);
  }
/*  cargarTabla(personas:Persona[]):void{
    this.personas=personas;
  } */

}
