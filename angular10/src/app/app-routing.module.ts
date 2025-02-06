import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaComponent } from './tarefa/tarefa.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
{path:'usuario',component:UsuarioComponent},
{path:'tarefa',component:TarefaComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
