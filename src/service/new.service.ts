import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable ()
export class PrincipalService {
    public img: string;
    private url: string = 'http://localhost:3000/Comida';

    constructor(private servidor: HttpClient) {
    }

    obtenerImagen(id){
        return this.servidor.get(`${this.url}/${id}`);
    }

    public obtenerCategoria(categoria: string) {
        let final = []
        return this.servidor.get<Array<any>>(`${this.url}`,{
            headers: {"Content-Type": "application/json"}
        }).subscribe(x => {return})
        
    }
}