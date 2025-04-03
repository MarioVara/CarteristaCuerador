import { Component, OnInit } from '@angular/core';
import { GettersService } from '../../server/getters.service';
import { ComunService } from '../../service/comun.service';
import { Item } from '../../model/model';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'rxjs';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { EditService } from '../../server/edit.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  standalone: true
})
export class FormularioComponent implements OnInit  {
  item!:Item;
  hay:boolean = false;
  id:string = '';
  titulo:string ='';
  fotos:string[] = [];
  descripcion:string='';
  categoria:string='';
  aniadirItem!:Item;
  photos: string[] = [];
  fileNames: string[] = [];

  constructor(private gett:GettersService, private comun:ComunService, private route: ActivatedRoute, private router:Router, private edit:EditService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuth: any) =>{
      console.log(isAuth);
      if(!isAuth){
        this.router.navigate(['/']);
      }
    });
    this.route.paramMap.subscribe(params => {
        this.id = params.get('idProducto') || '';
        console.log('Id recogido: ' + this.id);
        this.hayItem();
      });
       
    }
  
  

  hayItem(){
    console.log('El id en cuestion '+ this.id);
      if(this.id == '0'){ 
        this.hay = false;
      }
      else{
        this.gett.getIndividualPorId(this.id).subscribe(result =>{
          console.log('esto es tal vacio' + result);
          this.item = result;
          this.hay =true;
          console.log('esto es tal' + result.titulo);
        });
    }
  }

  aniadir(titulo:string, fotos:string[], descripcione:string, categoria:string ){
    if(titulo==''||descripcione=='' ||categoria==''){
      Swal.fire({
        title: "Algo falta",
        text: "Introduce todos los datos",
        icon: "error"
      });  
      }
    else {
      this.aniadirItem = {id:0, titulo:titulo, foto:fotos, descripcion:descripcione, categoria:categoria};
      const formData = {
        ...descripcione.valueOf,
        photos: this.photos.map(photo => photo.split('/').pop())
      };
      console.log(formData);
      console.log(this.getFileNames());
      this.edit.aniadirItem(this.aniadirItem);
    
      console.log(this.aniadirItem)
      Swal.fire({
        title: "Perfect",
        text: "Producto Añadido",
        icon: "info"
      });
    }
  }
  actualizar(titulo:string, fotos:string[], descripcion:string, categoria:string){
    if(titulo==''||descripcion=='' ||categoria==''){
      Swal.fire({
        title: "Algo falta",
        text: "Introduce todos los datos",
        icon: "error"
      });
    }
    else {
      
      this.aniadirItem = {id:Number(this.id), titulo:titulo, foto:fotos, descripcion:descripcion, categoria:categoria};
      console.log(this.aniadirItem);
      this.edit.editarItem(this.aniadirItem);
      console.log(this.aniadirItem);
      Swal.fire({
        title: "Perfect",
        text: "Producto Editado",
        icon: "info"
      });
    }
  }

  atras(){
    this.router.navigate(['/admin'])
  }

  getFileNames(): string[] {
    return this.fileNames;
  }
  onFileSelected(event: any){
    this.fotos = [];
    const archivos: FileList = event.target.files;

    for (let i = 0; i < archivos.length; i++) {
      this.fotos.push(archivos[i].name); // Guardamos solo el nombre del archivo
    }
  }
}

