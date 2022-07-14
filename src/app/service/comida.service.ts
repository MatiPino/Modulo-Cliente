import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comida } from "src/app/interface/Comida";


@Injectable ()
export class ComidaService {
    private url: string = 'https://yavoy-api.herokuapp.com';
    public comida: Comida[]

    constructor(private servidor: HttpClient) {
    }

    public obtenerComida(): Observable<Array<Comida>> {
        return this.servidor.get<Array<Comida>>(this.url+ '/product', {
            headers: {
                'Content-type': 'application/json'
            },
        });
    }

    async getProductos() {
        const res = await fetch(`${this.url}/product`, {
          method: 'GET',
        });
    
        const resText = await res.text();
        return JSON.parse(resText);
    }

    async getProductosRestaurante(idRestaurante:string) {
        const res = await fetch(`${this.url}/productsByRestaurant/${idRestaurante}`, {
          method: 'GET',
        });
    
        const resText = await res.text();
        return JSON.parse(resText);
    }

}