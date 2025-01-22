import { Component, OnInit } from '@angular/core';
import { Foto } from '../../model/model';
import { GettersService } from '../../server/getters.service';
import { ComunService } from '../../service/comun.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monederos',
  imports: [],
  templateUrl: './monederos.component.html',
  styleUrl: './monederos.component.css',
  standalone:true
})
export class MonederosComponent implements OnInit{
constructor(private router:Router, private comun:ComunService, private get:GettersService){}

  categoria:string = "";
  esLaCategoria:string ="";
  escribirCategoria:string ="";
  resultado!:Foto[];
  url:string ='http://localhost/carteristacuerador/fotos/';
  
  ngOnInit(): void {
    this.get.getPrincipalesDe(this.comun.getCookie()).subscribe(result =>{
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
