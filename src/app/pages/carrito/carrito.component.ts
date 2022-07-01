import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {

  constructor(private router: Router) { }

  public navegar() {
    this.router.navigate(['/tabs/buscar/'])
  }

}
