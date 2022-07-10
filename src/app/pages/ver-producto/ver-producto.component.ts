import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Comida } from 'src/interface/Comida';
import { ComidaService } from 'src/service/comida.service';
import { PedidoService } from 'src/service/pedido.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.scss'],
})
export class VerProductoComponent implements OnInit {

  private idComida:number;
  private comidas:Array<Comida>;
  public comida:Comida = {
    id:0,
    img:'',
    categoria : '',
    nombre:'',
    restauranteID:0
  };
  
  constructor(private ruta: ActivatedRoute, private servicio:ComidaService, private servidorPedido: PedidoService ) { }

  ngOnInit() {
    this.idComida = this.ruta.snapshot.params.id
    this.servicio.obtenerComida().subscribe(data => {
      this.comida = data.find(e => e.id == this.idComida)
    })
  }

  // FiltrarComida(event: any){
  //   const comid = event.detail.value;
  //   if (comid == 'todas') {
  //     this.ngOnInit();
  //   }else {
  //     this.servicio.obtenerComida().subscribe(data => {
  //     this.comidas = data.filter(e => e.id == this.idComida)s
  //     })
  //   }
  // }

  // obtenerPedido(pedido) {
  //   this.servidorPedido.obtenerPedido(pedido).subscribe(data => {
  //     console.log(data)
  //   })
  // }
  
  obtenerPedido() {
    this.servidorPedido.obtenerPedido().subscribe(data => {
      console.log(data)
    })
  }

  // pagar(comid){
  //   this.router.navigate(['idComida'])

  // }
}

