import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Hulk','Ironman','Thor','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado  = this.heroes.pop() || '';//elimina el último elemento y lo almacena en la variable.
    //la función pop/shift... puede devolver un string o undefined, para ello hay que controlarlo, si es undefined que devuelva vacio
    
    //this.heroes.shift();//elimina el primer elemento. Este tipo de funciones retornan algo
  }
  borrarTodosHeroes(){
    this.heroes = [];//elimina todos 
  }
}
