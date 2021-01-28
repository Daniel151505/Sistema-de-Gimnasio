import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistemaGimnasio';
  usuario: any;
  cargando:boolean = true

  constructor(private auth: AngularFireAuth) {

    this.auth.user.subscribe((usuario) => {
         this.cargando = false;
         this.usuario = usuario;
    })

  }

}
