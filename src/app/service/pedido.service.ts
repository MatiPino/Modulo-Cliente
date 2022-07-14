import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../interface/Pedido";

@Injectable()
export class PedidoService {
    private url: string = 'https://yavoy-api.herokuapp.com/';

    constructor(private servidor: HttpClient) {

    }

    public enviarPedido(pedido:Pedido): Observable<Pedido>{
        return this.servidor.post<Pedido>(`${this.url}order`, JSON.stringify(pedido), {
          headers: {"Content-Type": "application/json"}
        })
      }

}