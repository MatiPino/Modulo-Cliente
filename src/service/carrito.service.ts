import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CarritoService {
    private carrito =[];


getCarrito(){
    return this.carrito;
}

    //Añadir producto
addRestaurant(restaurante){
    this.carrito.push(restaurante);
}

//Remover el producto
removeCarrito(){
    this.carrito =[];
}

constructor(){ }
}
