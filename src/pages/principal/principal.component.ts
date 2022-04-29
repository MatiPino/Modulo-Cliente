import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/service/new.service';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent implements OnInit{

  public PrincipalService: PrincipalService;

  constructor(public servicio: PrincipalService) {
    /* this.PrincipalService = servicio; */
  }

  ngOnInit () {
    console.log(this.servicio.obtenerCategoria("hamburgesas"))
  }

  public enviarCategoria(img) {
    this.PrincipalService.obtenerCategoria(img);
  }

}
