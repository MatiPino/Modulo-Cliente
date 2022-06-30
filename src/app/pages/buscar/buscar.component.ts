import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/service/comida.service';
import { Comida } from 'src/interface/Comida';
import { RestauranteService } from 'src/service/restaurantes.service';
import { Restaurantes } from 'src/interface/Restaurantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'buscar.component.html',
  styleUrls: ['buscar.component.css']
})
export class BuscarComponent implements OnInit{

  // --- Restaurantes --- //
  public restaurantes: Array<Restaurantes>;
  public mostrarRestaurantes: Array<Restaurantes>;
  public categoriaRestaurante: Array<any>;
  public categoriaSeleccionada: string;
  datosResturantes = '';

  public categorias = {'categoria': ['todas', 'hamburguesas', 'donas', 'sushi', 'pizzas']};
  
  constructor(private servidorRestaurante: RestauranteService, private router: Router) {}

  ngOnInit () {

    // --- Restaurantes --- //

    this.servidorRestaurante.obtenerRestaurante().subscribe(data => {
      this.restaurantes = data
      this.mostrarRestaurantes = data
      this.devolverRestaurante()
      })
  }

// --- Restaurantes --- //

filtroRestaurantes( event: any ) {
  const catego = event.detail.value;
  if (catego == 'todas') {
    this.ngOnInit();
  } else {
    this.servidorRestaurante.obtenerRestaurante().subscribe(data => {
        const temp = data.filter(x => x.categoria == catego)
        this.restaurantes = temp;
        this.mostrarRestaurantes = temp;
        this.devolverRestaurante();
    })
  }
}
  
public llamarRetaurante() {
  let listaComidas = []
  if (this.categoriaSeleccionada) {
    listaComidas = this.restaurantes.filter(x => x.categoria == this.categoriaSeleccionada)
    this.mostrarRestaurantes = listaComidas
    console.log(listaComidas);
  }else if(!this.categoriaSeleccionada){
    this.mostrarRestaurantes = this.restaurantes
  }
}

public traerRestaurante(categoria: any) {
  this.llamarRetaurante()
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