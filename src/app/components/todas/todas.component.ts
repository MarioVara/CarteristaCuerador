import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { ComunService } from '../../service/comun.service';
import { GettersService } from '../../server/getters.service';
import { Item } from '../../model/model';
@Component({
  selector: 'app-todas',
  imports: [],
  templateUrl: './todas.component.html',
  styleUrl: './todas.component.css',
  standalone:true,
})
export class TodasComponent implements OnInit{
  constructor(private router:Router, private comun:ComunService, private get:GettersService){}

  categoria:string = "";
  esLaCategoria:string ="";
  escribirCategoria:string ="";
  resultado!:Item[];
  //url:string ='http://localhost/carteristacuerador/fotos/';
  url:string ='https://www.carteristacuerador.com/fotos/'

  ngOnInit(): void {
    this.get.getTodo().subscribe(result =>{
      this.resultado = result;
      console.log(this.resultado)}
    )
    
  }

  primeraMayus(){
    let category: string = this.comun.getCookie();
    
     // Asegurarse de que la categoría no esté vacía antes de transformarla
    if (category && category.length > 0) {
      category = category.toUpperCase();
    } else {
      category = category; // Si la categoría está vacía, no hacer nada
    }
    return category;
  }
  moversea (ruta:string, tipo:string){
    this.comun.setCookieTitulo(tipo)
    this.router.navigate(['/'+ruta+'/'+tipo]);
  }

}
