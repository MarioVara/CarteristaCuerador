import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ComunService } from '../../service/comun.service';
@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  standalone:true
})
export class NavBarComponent {
  constructor(private router: Router, private comun:ComunService){}
  ngOnInit() {
    
  }
  moversea(a: string){
    this.router.navigate(['/'+a])
  }
  
  moversecon(a: string, con: string){
    this.comun.setCookie(con);
    this.comun.irA(a, con);
  }
}
