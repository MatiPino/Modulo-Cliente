import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClient } from '../interface/ICliente';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url: string = 'https://api-mala.herokuapp.com/clientes';
  private httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client;
  }

  public getClient(): Observable<Array<IClient>> {
    return this.httpClient.get<Array<IClient>>(this.url, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  public addClient(newClient: IClient): Observable<IClient> {
    return this.httpClient.post<IClient>(this.url, JSON.stringify(newClient), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public deleteClient(id: number) {
    return this.httpClient.delete<any>(this.url + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public loginCliente(nuevosDatos: any) {
    return this.httpClient.post('https://api-mala.herokuapp.com/login', nuevosDatos);
  }
}
