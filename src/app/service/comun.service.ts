import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  constructor(private router: Router, private cookie:CookieService) { }




//Aqui tengo que meter también el parámetro para hacer la petición a la base de datos de lo que quiero recoger
  irA(donde:string, categoria:string){
    this.router.navigate(['/'+donde+'/'+categoria]);
    window.location.reload();
  }
  setCookie(text:string){
    this.cookie.set('categoria', text)
  }

  getCookie(){
    return this.cookie.get('categoria');
    
  }
}