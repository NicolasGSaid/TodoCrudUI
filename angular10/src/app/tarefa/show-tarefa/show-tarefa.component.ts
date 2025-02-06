import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tarefa',
  templateUrl: './show-tarefa.component.html',
  styleUrls: ['./show-tarefa.component.css']
})
export class ShowTarefaComponent implements OnInit {

  constructor(private service:SharedService) { }

  TarefaList:any=[];

  ModalTitle:string;
  ActivateAddEditTarefaComp:boolean=false;
  tarefa:any;
  ngOnInit(): void {
    this.refreshTarefaList();
  }

  addClick(){
    this.tarefa={
      TarefaId:0,
      TarefaNome:""
  }
    this.ModalTitle="Adicionar Tarefa";
    this.ActivateAddEditTarefaComp=true;

}

 closeClick(){

  this.ActivateAddEditTarefaComp=false;
  this.refreshTarefaList();

 }

  refreshTarefaList(){
    this.service.getTarefaList().subscribe(data=>{
      this.TarefaList=data;
    });
  }

}
