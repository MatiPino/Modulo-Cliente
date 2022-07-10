import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../pages/perfil/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://api-mala.herokuapp.com/clientes';
  private http: HttpClient;

  constructor(client: HttpClient) {
    this.http = client;
  }

  async getUser(userRut: string) {
    const res = await fetch(`${this.url}?rut=${userRut}`, {
      method: 'GET',
    });

    const resText = await res.text();
    console.log(JSON.parse(resText));
    return JSON.parse(resText);
  }

  updateUser(newData: any) {
    return this.http.patch(`${this.url}`, newData);
  }

  deleteUser(userRut: string) {
    return this.http.delete(`${this.url}?rut=${userRut}`);
  }
}
