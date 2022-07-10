import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/interface/Comida';
import { ComidaService } from 'src/service/comida.service';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})

export class ProductosPage implements OnInit {

  constructor(private servidorComida: ComidaService, private router: Router, private rutaActiva: ActivatedRoute) { }

  public comida: Array<Comida>;
  public mostrarComida: Array<Comida>;
  public categoria: Array<any>;
  public comidaSeleccionada: string;
  public carrito: Array<Comida>;

  public categorias: string;

  datosComida: '';

  ngOnInit() {

    this.categorias = this.rutaActiva.snapshot.params.id
    console.log(this.categorias);

    this.servidorComida.obtenerComida().subscribe(data => {
      this.comida = data
      this.carrito = data
      console.log(data);

      this.mostrarComida = data
      this.devolverComida()
    })

  }

  filtroComida(event: any) {
    const catego = event.detail.value;
    if (catego == 'todas') {
      this.ngOnInit();
    } else {
      this.servidorComida.obtenerComida().subscribe(data => {
        const temp = data.filter(x => x.id == catego)
        this.comida = temp;
        this.mostrarComida = temp;
        this.devolverComida();
      })
    }
  }

  public llamarComida() {
    let listaComidas = []
    if (this.comidaSeleccionada) {
      listaComidas = this.comida.filter(x => x.categoria == this.comidaSeleccionada)
      this.mostrarComida = listaComidas
      console.log(listaComidas);
    } else if (!this.comidaSeleccionada) {
      this.mostrarComida = this.comida
    }
  }

  public devolverComida() {
    let misComidas = []
    for (let i = 0; i < this.comida.length; i++) {
      misComidas.push(this.comida[i])
    }
    this.categoria = [...new Set(misComidas)]
  };

  public traerRestaurante(categoria: any) {
    this.llamarComida()
    this.datosComida = categoria.detail.value;
  }

  // agregarAlCarro(comida) {
  //   comida.cantidad = 1;
  //   this.carritoService.agregarComida(comida);
  //   console.log(comida);
  // }

  public navegar(id) {
    this.router.navigate(['/verProducto/'+ id])
  }

  // public enviarCarrito() {
  //   this.router.navigate(['/tabs/carrito/'])
  // }

  // public addCart(id) {
  //   this.comida = {
  //     "id": id,

  //   }
  //   this.carritoService.addComida(this.comida);
  //   console.log("product: ", this.comida);
  // }

  // addComida(comida) {
  //   let agregado = false;
  //   for (let p of this.carrito) {
  //     if (p.id === comida.id) {
  //       agregado = true;
  //       break;

  //     }
  //   }
  //   if (!agregado) {
  //     this.carrito.push(comida);
  //   }
  // }

}
