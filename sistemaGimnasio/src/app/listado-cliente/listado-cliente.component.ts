import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.scss']
})
export class ListadoClienteComponent implements OnInit {

  clientes: any[] = new Array<any>();
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.clientes.length = 0;
    this.db.collection('clientes').get().subscribe((resultado) => {
     
      resultado.docs.forEach((item) => {
       
        let cliente:any = item.data();
        cliente.id = item.id;
        cliente.rf = item.ref;
        this.clientes.push(cliente)
      });
    });
  }

}
