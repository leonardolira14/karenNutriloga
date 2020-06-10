import { Component, OnInit } from '@angular/core';
import { DatagenServiceService } from '../../services/datagen-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  form_mensaje: FormGroup;
  submmit = false;
  text_button = 'Enviar';
  constructor(
    private http: DatagenServiceService,
    private formBuild: FormBuilder,
  ) {
    this.form_mensaje = this.formBuild.group({
      Nombre: ['', Validators.required],
      Tel: ['', Validators.required],
      Correo: ['', Validators.required],
      Mensaje: ['', Validators.required]
    });
   }

  get get_data_form() {
    return this.form_mensaje.controls;
  }
  ngOnInit(): void {
    
  }

  enviar_mensaje() {
    console.log(this.form_mensaje.valid);
    this.submmit = true;
    if (this.form_mensaje.valid) {
      this.text_button = 'Procesando Datos';
      this.http.enviarmensaje(this.form_mensaje.value)
        .subscribe(data => {
          this.text_button = 'Enviar';
          Swal.fire('Exito', 'Mensaje enviado, Gracias', 'success');
          this.form_mensaje.reset();
        }, error => {
            this.text_button = 'Enviar';
            Swal.fire('Error', 'Error al enviar mensaje volver a intentarlo más tarde','error');
        });
    }
  }

}
