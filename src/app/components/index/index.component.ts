import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComunService } from '../../service/comun.service';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  standalone:true
})
export class IndexComponent {
  constructor(private router:Router, private comun:ComunService){}

  moversea(a: string, con: string){
    this.comun.setCookie(con);
    this.router.navigate(['/'+a+'/'+con]);
    
  }
}
