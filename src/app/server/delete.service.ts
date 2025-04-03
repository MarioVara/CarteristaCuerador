import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  //url:string = 'http://localhost/carteristacuerador/php_carterista/consultas.php/';
  url:string = 'https://www.carteristacuerador.com/php_carterista/consultas.php/';

  constructor(private http:HttpClient) { }
  deleteItem(id:number){
    const body = {
      id};
    return this.http.post(`${this.url}deleteItem/`, body).subscribe();
  }
}
