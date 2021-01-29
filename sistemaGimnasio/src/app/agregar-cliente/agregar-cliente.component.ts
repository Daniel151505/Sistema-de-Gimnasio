import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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

  constructor(private fb: FormBuilder, private storage: AngularFireStorage, private db: AngularFirestore ) { }

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
    this.db.collection('clientes').add(this.formularioCliente.value).then((termino)=>{
      console.log('Registro Creado')
    })
  }

  subirImagen(evento: any){

    if(evento.target.files.lenght > 0){
        let nombre = new Date().getTime().toString()
        let archivo = evento.target.files[0]
        let extension = archivo.name.toString().substring(archivo.name.toString().lastIndexOf('.'))
        let ruta = 'clientes/' + nombre + extension
        const referencia = this.storage.ref(ruta)
        const tarea = referencia.put(archivo)
    
        tarea.then((objeto)=>{
    
        console.log('imagen subida')
        referencia.getDownloadURL().subscribe((url)=>{
          console.log(url)
        })
    
        })
        tarea.percentageChanges().subscribe((porcentaje)=>{
            this.porcentajeSubida= porcentaje;
        })
    }
    

  }

}
