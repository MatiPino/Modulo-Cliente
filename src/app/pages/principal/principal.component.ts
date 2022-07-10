import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/app/service/comida.service';
import { Comida } from 'src/app/interface/Comida';
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

  public categoriaSeleccionado: string;

  public comidaInterface: Comida;
  public comidaInfo: any;


  constructor(public servicio: ComidaService, private router: Router) {
  }

  ngOnInit() {

    this.servicio.getProductos().then((res) => {
      this.comidaInfo = res;
      // console.log(this.comidaInfo); Me muestra cada productos con su array
      this.comidaInterface = res;
      this.comida = res
      this.mostrarComida = res
      this.devolverCategoria()
      
    })

  }

  public devolverCategoria() {
    let misCategorias = []
    for (let i = 0; i < this.comida.length; i++) {
      misCategorias.push(this.comida[i].Categoria)
    }
    this.categoria = [...new Set(misCategorias)]
    // console.log(this.categoria); me muestra todas las categorias
    
  };


  public cambiarComida(categoria) {
    this.comidaCambiada()
  }


  public comidaCambiada() {
    let lista = []
    if (this.categoriaSeleccionado) {
      lista = this.comida.filter(x => x.Categoria == this.categoriaSeleccionado)
      this.mostrarComida = lista
      // console.log(lista); Muestra la array de cada objeto llamado por categoria
    } else if (!this.categoriaSeleccionado) {
      this.mostrarComida = this.comida;
    }
  }


  public navegar(categoria) {
    this.router.navigate(['/productos/'+`${categoria}`])
  }
}

