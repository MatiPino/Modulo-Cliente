import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Comida } from 'src/app/interface/Comida';
import { Pedido } from 'src/app/interface/Pedido';
import { ComidaService } from 'src/app/service/comida.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { IClient } from 'src/app/interface/ICliente';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.scss'],
})
export class VerProductoComponent implements OnInit {

  private idComida:number;
  private comidas:Array<Comida>;
  public comida:Comida = {
    idProducto:0,
    Nom_prod:'',
    Precio: 0,
    Imagen:'',
    Categoria : '',
    idRestaurante:0
  };
  public pedido:Pedido = {
    Estado: '',
    Fecha_p: null,
    Descripcion: '',
    Repartidor_idRepartidor: 0,
    Cliente_idCliente: 0,
    Metodo_Pago_idMetodo_Pago: 0
  }
  public cliente: IClient
  public date = new Date().toISOString().slice(0,10);



  constructor(private ruta: ActivatedRoute, private servicio: ComidaService, private servidorPedido: PedidoService, private router: Router) { }

  async ngOnInit() {
    this.idComida = this.ruta.snapshot.params.id
    var res: any = await this.servicio.obtenerComida().toPromise();
    var producto = res.allProducts.filter(product => product.idProducto == this.idComida)
    this.comida = producto[0]
  }

  public onSubmit(e) {
    let nuevoPedido: Pedido = {
    Estado: 'Enviado',
    Fecha_p: this.date,
    Descripcion: `Se solicito un ${this.comida.Nom_prod}`,
    Repartidor_idRepartidor: 1,
    Cliente_idCliente: 3,
    Metodo_Pago_idMetodo_Pago: 1
    };
    console.log(nuevoPedido);
    

    this.servidorPedido.enviarPedido(nuevoPedido).subscribe((data) => {
      return;
    });
    this.volver();
  }

  volver() {
    this.router.navigateByUrl('/productos');
  }

  public navegar() {
    let idRestaurante = localStorage.getItem('idRestaurante');
    this.router.navigate(['/productos/'+`${idRestaurante}`])
  }
}
