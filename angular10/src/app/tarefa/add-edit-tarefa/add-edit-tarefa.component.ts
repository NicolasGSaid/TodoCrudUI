import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-tarefa',
  templateUrl: './add-edit-tarefa.component.html',
  styleUrls: ['./add-edit-tarefa.component.css']
})
export class AddEditTarefaComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() tarefa: any;
  TarefaNome: string;
  TarefaDescricao: string;
  TarefaId: string;

  ngOnInit(): void {
    this.TarefaId = this.tarefa.TarefaId;
    this.TarefaNome = this.tarefa.TarefaNome;
    this.TarefaDescricao = this.tarefa.TarefaDescricao;
  }

  addTarefa() {
    var val = {
      TarefaId: this.TarefaId,
      TarefaNome: this.TarefaNome,
      TarefaDescricao: this.TarefaDescricao 
    };

    console.log(val)
    this.service.addTarefa(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateTarefa() {
    var val = {
      TarefaId: this.TarefaId,
      TarefaNome: this.TarefaNome,
      TarefaDescricao: this.TarefaDescricao
    };
    this.service.updateTarefa(val).subscribe(res => {
      alert(res.toString());
    });
  }
}