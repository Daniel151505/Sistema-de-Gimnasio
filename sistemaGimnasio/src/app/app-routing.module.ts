import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ListadoClienteComponent } from './listado-cliente/listado-cliente.component';

const routes: Routes = [
  {
    path: 'listado-cliente', component: ListadoClienteComponent
  },
  {
    path: 'agregar-cliente', component: AgregarClienteComponent
  },
  {
    path: 'agregar-cliente/:clienteID', component: AgregarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
