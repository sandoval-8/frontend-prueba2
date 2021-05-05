import { Component, OnInit } from '@angular/core';
import { Centro } from 'src/app/Modelo/Centro';
import { ServiceAsideService } from './service/service-aside.service'

@Component({
  selector: 'app-aside-centros',
  templateUrl: './aside-centros.component.html',
  styleUrls: ['./aside-centros.component.css']
})
export class AsideCentrosComponent implements OnInit {

  centros:Centro[];

  constructor(private service:ServiceAsideService) { }

  ngOnInit(): void {
    this.service.get()
    .subscribe(data=>{
      this.centros=data;
      console.log(this.centros);
    });
  }

  evento(nombre:string){
    console.log(nombre);
  }

}
