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
  TarefaId: number;

  ngOnInit(): void {
    console.log('Tarefa passada como Input:', this.tarefa);
  
    if (this.tarefa) {
      this.TarefaId = Number(this.tarefa.TarefaId);  // Garantir que seja um número
      this.TarefaNome = this.tarefa.TarefaNome || '';
      this.TarefaDescricao = this.tarefa.TarefaDescricao || '';
    } else {
      this.TarefaId = 0;  // Inicializando como número
      this.TarefaNome = '';
      this.TarefaDescricao = '';
    }
  }

  addTarefa() {
    var val = {
      TarefaId: this.TarefaId,
      TarefaNome: this.TarefaNome,
      TarefaDescricao: this.TarefaDescricao, 
    };
  
    console.log(val); // Verifique se os valores estão sendo passados corretamente
  
    this.service.addTarefa(val).subscribe(res => {
      alert(res.toString());
    }, error => {
      console.error("Erro ao adicionar tarefa", error);
      alert("Falha ao adicionar");
    });
  }

  updateTarefa() {
    var val = {
      TarefaId: this.TarefaId,
      TarefaNome: this.TarefaNome,
      TarefaDescricao: this.TarefaDescricao,
    };
    this.service.updateTarefa(val).subscribe(res => {
      alert(res.toString());
    });
  }
}