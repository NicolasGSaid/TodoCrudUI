import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ShowTarefaComponent } from './tarefa/show-tarefa/show-tarefa.component';
import { AddEditTarefaComponent } from './tarefa/add-edit-tarefa/add-edit-tarefa.component';
import { SharedService } from './shared.service';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    ShowTarefaComponent,
    AddEditTarefaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }