import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/service/new.service';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent implements OnInit{

  public comida:Array<any>;

  public PrincipalService: PrincipalService;

  constructor(public servicio: PrincipalService) {
    /* this.PrincipalService = servicio; */
  }



  ngOnInit () {
  //   this.servicio.obtenerCategoria("hamburgesas").subscribe(data => {this.comida = data})
  this.servicio.obtenerComida().subscribe(data => {this.comida = data})
  }

  public enviarCategoria(img) {
    this.PrincipalService.obtenerCategoria(img);
    console.log(this.comida);
    
  }

}
