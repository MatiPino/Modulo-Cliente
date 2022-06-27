import { Component, OnInit } from '@angular/core';
import { SuperService } from 'src/service/super.service';
import { Supermercado } from '../interface/categoria/Supermercado';

@Component({
  selector: 'app-tab3',
  templateUrl: 'super.component.html',
  styleUrls: ['super.component.css']
})
export class SuperComponent {

  private supermercado:Array<Supermercado>;
  public mostrarSuper:Array<Supermercado>;
  public super:Array<any>;
  public superSeleccionado:string;
  textoBuscar = '';

  constructor(public servicioSuper:SuperService) {}

  ngOnInit () {
    this.servicioSuper.obtenerSuper().subscribe(data => [
      this.super=data,
      this.mostrarSuper=data,
      this.devolverSuper()
    ])
  }

  public devolverSuper() {
    let miSuper = []
    for (let i = 0; i < this.super.length; i++) {
      miSuper.push(this.super[i].nombre)
    }
    this.super=[...new Set(miSuper)]
  }

  public superCambiado() {
    let lista = []
    if (this.superSeleccionado) {
      lista = this.super.filter(x => x.categoria == this.superSeleccionado)
      this.mostrarSuper = lista
      console.log(lista);
    } else if (!this.superSeleccionado) {
      this.mostrarSuper = this.super;
    }
  }

  public cambiarSuper(nombre: any) {
    this.superCambiado()
    this.textoBuscar=nombre.detail.value;
  }

}
