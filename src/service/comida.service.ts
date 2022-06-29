import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comida } from "src/interface/Comida";


@Injectable ()
export class ComidaService {
    private url: string = 'http://localhost:3000/Comida';
    public comida: Comida[]

    constructor(private servidor: HttpClient) {
    }

    public obtenerComida(): Observable<Array<Comida>> {
        return this.servidor.get<Array<Comida>>(this.url, {
            headers: {
                'Content-type': 'application/json'
            },
        });
    }
}