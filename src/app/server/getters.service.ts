import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class GettersService {
  
  url:string = 'http://localhost/carteristacuerador/php_carterista/'
  
  constructor(private http:HttpClient) { }

  getTodasPrincipales (){
    const fotos = this.http.get<Foto[]>(`${this.url}consultas.php/getTodasPrincipales`,);
    console.log(fotos)
    return fotos;
  }

  getPrincipalesDe(categoria:string){
    console.log(categoria)
    const fotos = this.http.get<Foto[]>(`${this.url}consultas.php/getCategoria/${categoria}`,);
    console.log(fotos)
    return fotos;
  }
  getIndividual(titulo:string){
    const fotos = this.http.get<Foto[]>(`${this.url}consultas.php/getUna/${titulo}`,);
    console.log(fotos)
    return fotos;

  }
}
