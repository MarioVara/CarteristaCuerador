import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService} from 'ngx-cookie-service';
import { Item } from '../model/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  constructor(private router: Router, private cookie:CookieService, private _http:HttpClient) { }

  resultado!:Item[];
  
  urlCorreos:string = 'http://localhost:3000/envio';
  //urlCorreos:string = 'https://www.carteristacuerador.com/BackendCorreos/envio';
//Aqui tengo que meter también el parámetro para hacer la petición a la base de datos de lo que quiero recoger
  irA(donde:string, categoria:string){
    this.router.navigate(['/'+donde+'/'+categoria]);
    window.location.reload();
  }
  setCookie(text:string){
    this.cookie.set('categoria', text);
  }
  setCookieTitulo(titulo:string){
    this.cookie.set('titulo', titulo);
  }

  getCookie(){
    return this.cookie.get('categoria');
  }
  getTitulo(){
    return this.cookie.get('titulo');
  }
  enviarMensaje(body:any){
    return this._http.post(this.urlCorreos, body);
  }
}