import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comida } from "src/pages/interface/categoria/Comida";


@Injectable ()
export class PrincipalService {
    public img: string;
    public text: string;
    private url: string = 'http://localhost:3000/Comida';

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