import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/service/carrito.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent  implements OnInit{
    
  selectedRestaurante = [];
  total = 0;

  constructor(
    private carritoService: CarritoService,
    private router: Router){
  }

  ngOnInit(){
    let restaurante = this.carritoService.getCarrito();
    let selected = {};

    for(let obj of restaurante){
      selected[obj.id] = {... obj, count: 1};
    }

    ///// FALTA EL SELECCINAR RESTAURANTE JUNTO CON EL TOTAL.
  }

  public navegar() {
    this.router.navigate(['/tabs/buscar/'])
  }

  


}
