import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunService } from '../../service/comun.service';
import { GettersService } from '../../server/getters.service';
import { AuthService } from '@auth0/auth0-angular';
import { Item } from '../../model/model';
import { FormsModule } from '@angular/forms';
import { DeleteService } from '../../server/delete.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-area',
  imports: [FormsModule],
  templateUrl: './admin-area.component.html',
  styleUrl: './admin-area.component.css',
  standalone: true
})
export class AdminAreaComponent implements OnInit  {
  EditProductoId:number=0;
  DelProductoId:number=0;

  productos!:Item[];
  
  constructor( private router: Router, private eliminar: DeleteService, private comun:ComunService, private get: GettersService, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuth: any) =>{
      console.log(isAuth);
      if(!isAuth){
        this.router.navigate(['/']);
      }
    });
    // Recoger todos los nombres de los productos
    this.get.getTodo().subscribe(data =>{
      this.productos=data;
    });
  }

  editarItem(id:number){
    if(id==0){
      Swal.fire({
        title: '¿Eres bobo?', 
        text: 'Selecciona un producto para editar',
        icon: 'error',
        confirmButtonText: "Vale hijoooo",

      });
    }
    else{
    console.log('Editando Producto ' + id);
    this.router.navigate(['/form', id]);}
  }

  aniadirItem(){
    console.log('Editando Producto');
    this.router.navigate(['/form',  '0']);
  }

  eliminarItem(id:number){
    Swal.fire({
      title: '¿Estás seguro?',
      showDenyButton: true,
      confirmButtonText: "Cancelar",
      denyButtonText: `ELIMINAR`,
      icon: 'warning'
    }).then((result) => {
      if (result.isDenied) {

        console.log('Producto ' + id + ' Eliminado');
        this.eliminar.deleteItem(id);
        Swal.fire("Eliminado", "", "error");
      }
    });
  }

}
