import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {

  formularioCliente!: FormGroup
  porcentajeSubida:any = 0;

  constructor(private fb: FormBuilder, private storage: AngularFireStorage ) { }

  ngOnInit(): void {
    this.formularioCliente = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      DNI: [''],
      fechaNacimiento: ['',Validators.required],
      telefono: [''],
      imgUrl: ['', Validators.required]
    })
  }

  agregar(){
    console.log(this.formularioCliente.value)
  }

  subirImagen(evento: any){
    let archivo = evento.target.files[0]
    let ruta = 'clientes/imagen1.png'
    const referencia = this.storage.ref(ruta)
    const tarea = referencia.put(archivo)
    tarea.then((objeto)=>{
    console.log('imagen subida')

    })
    tarea.percentageChanges().subscribe((porcentaje)=>{
        this.porcentajeSubida= porcentaje;
    })

  }

}
