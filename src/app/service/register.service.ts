import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { IUsuario } from '../interface/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url:string = "https://api-mala.herokuapp.com/"

  constructor(private client:HttpClient) { }

  public postUsuario(usuario:IUsuario): Observable<IUsuario>{
    return this.client.post<IUsuario>(`${this.url}agregarCliente`, JSON.stringify(usuario), {
      headers: {"Content-Type": "application/json"}
    })
  }
}