import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  standalone:true
})
export class IndexComponent {

}
