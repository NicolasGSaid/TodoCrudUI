import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + 'tarefa/');
  }

  addTarefa(val:any){
    return this.http.post(this.APIUrl + 'tarefa/',val);
  }
  
  updateTarefa(val:any){
    return this.http.put(this.APIUrl + 'tarefa/',val);
  }

  deleteTarefa(val:any){
    return this.http.delete(this.APIUrl + 'tarefa/',val);
  }
  getUsuarioList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + 'usuario/');
  }

  addUsuario(val:any){
    return this.http.post(this.APIUrl + 'usuario/',val);
  }
  
  updateUsuario(val:any){
    return this.http.put(this.APIUrl + 'usuario/',val);
  }

  deleteUsuario(val:any){
    return this.http.delete(this.APIUrl + 'usuario/',val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + 'SaveFile',val);
  }

  getAllTarefaNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + 'tarefa/');
  }
}
