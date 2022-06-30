import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Restaurantes } from "src/interface/Restaurantes"; 


@Injectable ()
export class RestauranteService {
    public img: string;
    public text: string;
    private url: any = 'http://localhost:3000/Restaurantes';

    constructor(private servidor: HttpClient) {
    }

    public obtenerRestaurante(): Observable<Array<Restaurantes>> {
        return this.servidor.get<Array<Restaurantes>>(this.url, {
            headers: {
                'Content-type': 'application/json'
            },
        });
    }

}