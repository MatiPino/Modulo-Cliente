import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/interface/Comida';
import { ComidaService } from 'src/app/service/comida.service';
import { ActivatedRoute } from '@angular/router';


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
  public productoSeleccionada: string;
  public categorias: string;
  public comidaInfo: any;

  datosComida: '';

  ngOnInit() {

    this.categorias = this.rutaActiva.snapshot.params.id
    console.log(this.categorias);

    this.servidorComida.getProductos().then(res => {
      this.comida = res
      console.log(res);
      this.mostrarComida = res
      this.devolverComida()
      })

  }


  filtroComida( event: any ) {
    const catego = event.detail.value;
    if (catego == 'todas') {
      this.ngOnInit();
    } else {
      this.servidorComida.obtenerComida().subscribe(data => {
          const temp = data.filter(x => x.idProducto == catego)
          this.comida = temp;
          this.mostrarComida = temp;
          this.devolverComida();
      })
    }
  }


  public llamarComida() {
    let listaComidas = []
    if (this.productoSeleccionada) {
      listaComidas = this.comida.filter(x => x.Categoria == this.productoSeleccionada)
      this.mostrarComida = listaComidas
      console.log(listaComidas);
    }else if(!this.productoSeleccionada){
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

}
