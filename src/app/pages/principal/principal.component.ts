import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/service/comida.service';
import { Comida } from 'src/interface/Comida';
import { Router } from '@angular/router';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})

export class PrincipalComponent implements OnInit {

  private comida: Array<Comida>;
  public mostrarComida: Array<Comida>;
  public categoria: Array<any>;

  public valorSeleccionado: string;

  constructor(public servicio: ComidaService, private router: Router) {
  }

  ngOnInit() {

    this.servicio.obtenerComida().subscribe(data => {
      this.comida = data
      this.mostrarComida = data
      this.devolverCategoria()
    })

  }

  public devolverCategoria() {
    let misCategorias = []
    for (let i = 0; i < this.comida.length; i++) {
      misCategorias.push(this.comida[i].categoria)
    }
    this.categoria = [...new Set(misCategorias)]
  };

  public cambiarComida(categoria: any) {
    this.comidaCambiada()
  }

  public comidaCambiada() {
    let lista = []
    if (this.valorSeleccionado) {
      lista = this.comida.filter(x => x.categoria == this.valorSeleccionado)
      this.mostrarComida = lista
      console.log(lista);
    } else if (!this.valorSeleccionado) {
      this.mostrarComida = this.comida;
    }
  }

  public navegar(categoria) {
    this.router.navigate(['/productos/'+`${categoria}`])
  }
}

