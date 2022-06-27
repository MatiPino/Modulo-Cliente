import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Supermercado } from "src/pages/interface/categoria/Supermercado";

@Injectable()
export class SuperService {
    public img: string;
    private url: string = 'http://localhost:3000/Supermercado';

    constructor(private servidor: HttpClient) {
    }

    public obtenerSuper(): Observable<Array<Supermercado>> {
        return this.servidor.get<Array<Supermercado>>(this.url, {
            headers: {
                'Content-type': 'application/json'
            },
        });
    }
}