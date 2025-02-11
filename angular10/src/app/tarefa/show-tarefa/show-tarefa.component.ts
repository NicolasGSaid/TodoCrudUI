import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tarefa',
  templateUrl: './show-tarefa.component.html',
  styleUrls: ['./show-tarefa.component.css']
})
export class ShowTarefaComponent implements OnInit {

  constructor(private service: SharedService) { }

  TarefaList: any = [];

  ModalTitle: string;
  ActivateAddEditTarefaComp: boolean = false;
  tarefa: any;

  TarefaIdFilter: string = "";
  TarefaNomeFilter: string = "";
  TarefaListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshTarefaList();
  }

  addClick() {
    this.tarefa = {
      TarefaId: 0,
      TarefaNome: ""
    }
    this.ModalTitle = "Adicionar Tarefa";
    this.ActivateAddEditTarefaComp = true;
  }

  editClick(item) {
    this.tarefa = item;
    this.ModalTitle = "Editar Tarefa";
    this.ActivateAddEditTarefaComp = true;
  }

  deleteClick(tarefa: { TarefaId: number }) {
    const id = tarefa.TarefaId;
    console.log(id);  // Verifique se o id está correto (ex: 7)
    this.service.deleteTarefa(id).subscribe(
      res => {
        alert("Tarefa deletada com sucesso!");
        this.refreshTarefaList();
      },
      err => {
        console.error("Erro ao deletar tarefa:", err);
        alert("Erro ao deletar tarefa. Verifique se ela existe.");
      }
    );
  }

  closeClick() {
    this.ActivateAddEditTarefaComp = false;
    this.refreshTarefaList();
  }

  refreshTarefaList() {
    this.service.getTarefaList().subscribe(data => {
      this.TarefaList = data;
      this.TarefaListWithoutFilter = data;
    });
  }

  FilterFn() {
    var TarefaIdFilter = this.TarefaIdFilter;
    var TarefaNomeFilter = this.TarefaNomeFilter;

    this.TarefaList = this.TarefaListWithoutFilter.filter(function (el) {
      return el.TarefaId.toString().toLowerCase().includes(
        TarefaIdFilter.toString().trim().toLowerCase()
      ) &&
        el.TarefaNome.toString().toLowerCase().includes(
          TarefaNomeFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop, asc) {
    this.TarefaList = this.TarefaListWithoutFilter.sort(function (a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}