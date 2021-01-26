import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistemaGimnasio';

  constructor(public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithEmailAndPassword('prueba@gmail.com','123456789');
  }
  logout() {
    this.auth.signOut();
  }

}
