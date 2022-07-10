import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Restaurantes } from "src/app/interface/Restaurantes"; 


@Injectable ()
export class RestauranteService {
    public img: string;
    public text: string;
    private url: any = 'https://api-mala.herokuapp.com/restaurantes';

    constructor(private servidor: HttpClient) {
    }

    public obtenerRestaurante(): Observable<Array<Restaurantes>> {
        return this.servidor.get<Array<Restaurantes>>(this.url, {
            headers: {
                'Content-type': 'application/json'
            },
        });
    }

    async getRestaurantes() {
        const res = await fetch(`${this.url}`, {
          method: 'GET',
        });
    
        const resText = await res.text();
        return JSON.parse(resText);
      }

}