import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/service/categorias.service';
import { Categorias } from '../interface/categoria/Categorias';

@Component({
  selector: 'app-tab2',
  templateUrl: 'buscar.component.html',
  styleUrls: ['buscar.component.css']
})
export class BuscarComponent implements OnInit{

  private comida: Array<Categorias>;
  public mostrarComida: Array<Categorias>;
  public categoria: Array<any>;

  public categoriaSeleccionada: string;

  public PrincipalService: CategoriaService;
  
  textoBuscar = '';

  constructor(public servicio: CategoriaService) {
  }

  ngOnInit () {

    this.servicio.obtenerCategoria().subscribe(data => {
      this.comida = data
      this.mostrarComida = data
      this.devolverCategoria()
    })

  }

  public devolverCategoria() {
    let misComidas = []
    for (let i = 0; i < this.comida.length; i++) {
      misComidas.push(this.comida[i].nombre)       
    }
    this.categoria = [...new Set(misComidas)]
    
  };

  public cambiarCategoria(categoria: any) {
    this.categoriaCambiada()
    this.textoBuscar = categoria.detail.value;
  }

  public categoriaCambiada() {
    let lista = []
    if (this.categoriaSeleccionada) {
      lista = this.comida.filter(x => x.nombre == this.categoriaSeleccionada)
      this.mostrarComida = lista
      console.log(lista);
    }else if(!this.categoriaSeleccionada){
      this.mostrarComida = this.comida;
    }
  }

}
