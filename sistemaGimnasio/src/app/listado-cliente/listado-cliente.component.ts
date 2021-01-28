import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.scss']
})
export class ListadoClienteComponent implements OnInit {
  cliente: any [] = new Array<any>();

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {

  this.db.collection('clientes').valueChanges().subscribe((resultado)=>{
    this.cliente = resultado;
  })

  }

}
