import { Component, signal } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { ComunService } from '../../service/comun.service';


@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  standalone:true
})
export class ContactoComponent {
  constructor(private comun:ComunService) { }
  form=signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('',[Validators.required, Validators.pattern('^[0-9]*$')]),
      mensaje: new FormControl('', Validators.required)
    })
  )
  OnSubmit(){
    if(this.form().valid){
      console.log(this.form().valid);
      console.log(this.form().value);

      this.comun.enviarMensaje(this.form().value).subscribe();

      Swal.fire("Su mensaje ha sido enviado con éxito!");
      this.form().reset();
    }
    else{
      console.log(this.form().value);
      console.log(this.form().valid);

      Swal.fire({
        icon: "error",
        title: "Uy!",
        text: "Revisa que todos los campos estén completos y que el email sea válido.",
      });
    }
  }
}
