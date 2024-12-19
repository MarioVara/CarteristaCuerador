import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { stringify } from 'querystring';
import { UpperCasePipe } from '@angular/common';
import { __values } from 'tslib';
import { ComunService } from '../../service/comun.service';

@Component({
  selector: 'app-todas',
  imports: [],
  templateUrl: './todas.component.html',
  styleUrl: './todas.component.css',
  standalone:true,
})
export class TodasComponent {
  constructor(private route:ActivatedRoute, private comun:ComunService){}

  categoria:string = "";
  esLaCategoria:string ="";
  escribirCategoria:string ="";
  
  ngOnInit(): void {
    //this.route.params.subscribe(params => this.categoria = params['categoria']);
    this.primeraMayus();
    
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

}
