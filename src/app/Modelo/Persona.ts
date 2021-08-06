import { Centro } from './Centro'
export class Persona {
    id: number;
    legajo:string;
    nombre: string;
    apellidos: string;
    funcion:string;
    domicilio:string;
    oficina:string;
    horario:string;
    centro: Centro;

    constructor(id:number, legajo:string, nombre:string, apellidos:string,
        funcion:string, domicilio:string, oficina:string, horario:string){
        this.id=id;
        this.legajo=legajo
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.funcion=funcion;
        this.domicilio=domicilio;
        this.oficina=oficina;
        this.horario=horario;
    }
}