import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComunService } from '../../service/comun.service';
import { GettersService } from '../../server/getters.service';
import { AuthService } from '@auth0/auth0-angular';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  standalone:true
})
export class NavBarComponent {
  authy:boolean = false;
  rol:string = '';
  constructor(private router: Router, private comun:ComunService, private get: GettersService, public auth: AuthService){}

    
  
  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuth =>{
      if(isAuth){
        this.authy = true;
      }
    })
    this.getUserRoles().subscribe(roles =>{
      for(let rol of roles){
        console.log('rol' + rol)
        if (rol == 'Admin'){
          this.rol = rol;
        }
        
        console.log( 'Official Rol' + this.rol);
    }});
  }
  moversea(a: string){
    this.router.navigate(['/'+a])
  }
  
  moversecon(a: string, con: string){
    this.comun.setCookie(con);
    this.router.navigate(['/'+a+'/'+con]);
    
  }

  getUserRoles(): Observable<string[]> {
    return this.auth.user$.pipe(
      map((user) => {
        const namespace = 'http://localhost:4200';
        return user ? (user[namespace + 'roles'] as string[]) : [];
      })
    );
  }
}
