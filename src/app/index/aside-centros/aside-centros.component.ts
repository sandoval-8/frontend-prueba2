import { Component, OnInit } from '@angular/core';
import { Centro } from 'src/app/Modelo/Centro';
import { ServiceAsideService } from './service/service-aside.service'
import { TablePersonasComponent } from 'src/app/index/table-personas/table-personas.component'
/*import { Persona } from 'src/app/Modelo/Persona'; */

@Component({
  selector: 'app-aside-centros',
  templateUrl: './aside-centros.component.html',
  styleUrls: ['./aside-centros.component.css']
})
export class AsideCentrosComponent implements OnInit {

  centros:Centro[];

  constructor(private service:ServiceAsideService, private tabla:TablePersonasComponent) { }

/*  personas:Persona[]; */

  ngOnInit(): void {
    this.service.getCentros()
    .subscribe(data=>{
      this.centros=data;
      console.log(this.centros);
    });
  }

  evento(id:string):void {
    console.log(id);
    this.service.getPersonasForCentro(id)
    .subscribe(data=>{
  /*    this.tabla.cargarTabla(data); */
      console.log(data);
    });
  }

}
