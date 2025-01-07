import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ComunService } from '../../service/comun.service';
import { GettersService } from '../../server/getters.service';
import { Foto } from '../../model/model';
@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  standalone:true
})
export class NavBarComponent {
  constructor(private router: Router, private comun:ComunService, private get: GettersService){}
    resultado!:Foto[];
  
  ngOnInit() {
    
  }
  moversea(a: string){
    this.router.navigate(['/'+a])
  }
  
  moversecon(a: string, con: string){
    this.comun.setCookie(con);
    this.router.navigate(['/'+a+'/'+con]);
    
  }
}
