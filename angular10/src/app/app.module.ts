import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ShowTarefaComponent } from './tarefa/show-tarefa/show-tarefa.component';
import { AddEditTarefaComponent } from './tarefa/add-edit-tarefa/add-edit-tarefa.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ShowUsuarioComponent } from './usuario/show-usuario/show-usuario.component';
import { AddEditUsuarioComponent } from './usuario/add-edit-usuario/add-edit-usuario.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    ShowTarefaComponent,
    AddEditTarefaComponent,
    UsuarioComponent,
    ShowUsuarioComponent,
    AddEditUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
