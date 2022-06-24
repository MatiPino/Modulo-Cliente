import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categorias } from "src/pages/interface/categoria/Categorias";


@Injectable ()
export class CategoriaService {
    public img: string;
    public text: string;
    private url: any = 'http://localhost:3000/Categorias';

    constructor(private servidor: HttpClient) {
    }

    public obtenerCategoria(): Observable<Array<Categorias>> {
        return this.servidor.get<Array<Categorias>>(this.url, {
            headers: {
                'Content-type': 'application/json'
            },
        });
    }

}