import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  personaForm:Persona = new Persona();

  constructor(private roter:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(nombre:string,apellidos:string){
    this.personaForm.name=nombre;
    this.personaForm.apellidos=apellidos;
    this.service.createPersona(this.personaForm)
      .subscribe(data=>{
        alert("Se agrego con exito!!!");
        this.roter.navigate(["listar"]);
      })
  }

}
