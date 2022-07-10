import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/interface/Comida';
import { ComidaService } from 'src/service/comida.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})

export class DetalleComponent implements OnInit {

  private idComida:number;
  private comidas:Array<Comida>;
  public comida:Comida = {
    id:0,
    img:'',
    categoria: '',
    nombre: '',
    restauranteID:0


  };

  constructor( private servidorComida: ComidaService,) { }

  ngOnInit() {
    console.log('Hola mundo')
  }

  // OnClick(comida){
  //   this.comida.push(DetalleComponent, {
  //     id: comida.id
  //   });{

  //   }
  // }

}
