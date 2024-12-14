import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  standalone:true
})
export class NavBarComponent {
  constructor(private router: Router){}
  ngOnInit() {
    
  }
  moversea(a: string){
    this.router.navigate(['/'+a])
  }
  moversecon(a: string, con: string){
    //Aqui tengo que meter también el parámetro para hacer la petición a la base de datos de lo que quiero recoger
    this.router.navigate(['/'+a+'/'+con]);
    
  }
}
