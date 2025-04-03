import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class EditService {

//url:string = 'http://localhost/carteristacuerador/php_carterista/consultas.php/';
url:string = 'https://www.carteristacuerador.com/php_carterista/consultas.php/';

constructor(private http:HttpClient) { }
  aniadirItem(item: Item){
    return this.http.post(`${this.url}aniadirItem/`, item, {responseType: 'text'}).subscribe(response => {
      try {
        const jsonResponse = JSON.parse(response as string); // Intenta convertirlo en JSON
        console.log(jsonResponse);
      } 
      catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    }, error => {
      console.error("Error en la petición:", error);
    });
  }

  editarItem(item: Item){
    return this.http.post(`${this.url}editarItem/`, item, {responseType: 'text'}).subscribe(response => {
      try {
        const jsonResponse = JSON.parse(response as string); // Intenta convertirlo en JSON
        console.log(jsonResponse);
      } 
      catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    }, error => {
      console.error("Error en la petición:", error);
    });
  }
}
