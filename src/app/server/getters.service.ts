import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class GettersService {
  
  //url:string = 'http://localhost/carteristacuerador/php_carterista/consultas.php/';
  url:string = 'https://www.carteristacuerador.com/php_carterista/consultas.php/';

  
  constructor(private http:HttpClient) { }

  getTodo(){
    const fotos = this.http.get<Item[]>(`${this.url}getTodasPrincipales`,);
    console.log(fotos)
    return fotos;
  }

  getPrincipalesDe(categoria:string){
    console.log(categoria)
    const fotos = this.http.get<Item[]>(`${this.url}getCategoria/${categoria}`,);
    console.log(fotos)
    return fotos;
  }
  getIndividual(titulo:string){
    const fotos = this.http.get<Item[]>(`${this.url}getUna/${titulo}`,);
    console.log(fotos)
    return fotos;
  }
  getIndividualPorId(id:string){
    const fotos = this.http.get<Item>(`${this.url}getUnaId/${id}`,);
    console.log(fotos)
    return fotos;
  }
}
