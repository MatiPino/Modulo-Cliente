import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/service/restaurantes.service';
import { Restaurantes } from 'src/app/interface/Restaurantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'buscar.component.html',
  styleUrls: ['buscar.component.css']
})
export class BuscarComponent implements OnInit{

  public restaurantes: Array<Restaurantes>;
  public mostrarRestaurantes: Array<Restaurantes>;
  public categoriaRestaurante: Array<any>;
  public restauranteSeleccionado: string;
  public restauranteInfo: any;
  datosResturantes = '';

  public categorias = {'categoria': ['todas', 'McDonals', 'BurgerKing', 'PapaJhons', 'Donuts']};
  
  constructor(private servidorRestaurante: RestauranteService, private router: Router) {}

  ngOnInit () {

    // --- Restaurantes --- //

    this.servidorRestaurante.getRestaurantes().then(res => {
      this.restauranteInfo = res
      this.restaurantes = res
      this.mostrarRestaurantes = res
      this.devolverRestaurante()
      })
  }

// --- Restaurantes --- //

filtroRestaurantes( event: any ) {
  const catego = event.detail.value;
  if (catego == 'todas') {
    this.ngOnInit();
  } else {
    this.servidorRestaurante.getRestaurantes().then(data => {
        const temp = data.filter(x => x.Nombre_Negocio == catego)
        this.restaurantes = temp;
        this.mostrarRestaurantes = temp;
        this.devolverRestaurante();
    })
  }
}
  
public restauranteCambiado() {
  let listaComidas = []
  if (this.restauranteSeleccionado) {
    listaComidas = this.restaurantes.filter(x => x.Nombre_Negocio == this.restauranteSeleccionado)
    this.mostrarRestaurantes = listaComidas
    console.log(listaComidas);
  }else if(!this.restauranteSeleccionado){
    this.mostrarRestaurantes = this.restaurantes
  }
}

public traerRestaurante(categoria: any) {
  this.restauranteCambiado()
  this.datosResturantes = categoria.detail.value;  
}

public devolverRestaurante() {
  let misResaurantes = []
  for (let i = 0; i < this.restaurantes.length; i++) {
    misResaurantes.push(this.restaurantes[i])       
  }
  this.categoriaRestaurante = [...new Set(misResaurantes)]
};

public navegar(categoria) {
  this.router.navigate(['/productos/'+`${categoria}`])
}

}