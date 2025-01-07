import { Component, OnInit } from '@angular/core';
import { Foto } from '../../model/model';
import { Router } from '@angular/router';
import { ComunService } from '../../service/comun.service';
import { GettersService } from '../../server/getters.service';

@Component({
  selector: 'app-tabaqueras',
  imports: [],
  templateUrl: './tabaqueras.component.html',
  styleUrl: './tabaqueras.component.css',
  standalone:true,
})
export class TabaquerasComponent implements OnInit{
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
      this.escribirCategoria = category.charAt(0).toUpperCase() + category.slice(1);
    } else {
      this.escribirCategoria = category; // Si la categoría está vacía, no hacer nada
    }
    return category;
  }
  moversea (ruta:string, tipo:string){
    this.router.navigate(['/'+ruta+'/'+tipo]);
  }

}
