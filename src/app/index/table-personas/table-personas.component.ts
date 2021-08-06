import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Persona } from 'src/app/Modelo/Persona';
import { ServiceTableService } from './service/service-table.service';
import { Centro } from 'src/app/Modelo/Centro';

@Component({
  selector: 'app-table-personas',
  templateUrl: './table-personas.component.html',
  styleUrls: ['./table-personas.component.css']
})
export class TablePersonasComponent implements OnInit {

  centroSelect:string;
  centros:Centro[];
  personas: Persona[];

  constructor(private service: ServiceTableService, private router: Router, public modal:NgbModal) { }

  ngOnInit(): void {
    this.service.getCentros()
    .subscribe(data=>{
      this.centros=data;
      console.log(this.centros);
    });
  }
  listPerson(numero:string){
    this.centroSelect=numero;
    this.service.getPersonasForCentro(numero)
      .subscribe(data => {
        this.personas = data;
      });
  }
  editarPersona(Persona2: Persona): void {
    
  } 
  borrarPersona(){

  }
}
