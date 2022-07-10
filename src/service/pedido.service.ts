import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "src/interface/Pedido";

@Injectable()
export class PedidoService {
    private url: string = 'http://localhost:3000/Pedido';

    constructor(private servidor: HttpClient) {

    }

    public obtenerPedido(): Observable<Array<Pedido>> {
        return this.servidor.post<Array<Pedido>>(this.url, {
            headers: {
                'Content-type': 'application/json'
            },
        });
    }

}
