import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ComunService } from '../../service/comun.service';
import { GettersService } from '../../server/getters.service';
import { Item } from '../../model/model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-individual',
  imports: [CommonModule],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.css',
  standalone: true
})
export class IndividualComponent implements OnInit {
   resultado!:Item[];
   //url:string ='http://localhost/carteristacuerador/fotos/';
   url:string ='https://www.carteristacuerador.com/fotos/'
  activeIndex: number = 0;
  constructor(private router:Router, private comun:ComunService, private get:GettersService, private sanitizer:DomSanitizer){}
 
  ngOnInit(): void {
    this.get.getIndividual(this.comun.getTitulo()).subscribe(result =>{
      this.resultado = result;
      console.log('result: ' + result);
      }
    )
    ;
  }

  moversea (){
    this.router.navigate(['/contacto']);
  }

  // Método para cambiar la clase según el índice
  setActive(index: number): void {
    console.log('funciona' + index)
    this.activeIndex = index;
  }

}
