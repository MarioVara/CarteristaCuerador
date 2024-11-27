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
  
  moversea(a: string){
    this.router.navigate(['/'+a])
  }
  moversecon(a: string){

  }
}
