import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaComponent } from './tarefa/tarefa.component';

const routes: Routes = [
  { path: 'tarefa', component: TarefaComponent },
  { path: '', redirectTo: '/tarefa', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }