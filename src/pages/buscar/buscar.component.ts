import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/service/comida.service';
import { Comida } from 'src/interface/Comida';

@Component({
  selector: 'app-tab2',
  templateUrl: 'buscar.component.html',
  styleUrls: ['buscar.component.css']
})
export class BuscarComponent implements OnInit{

  public comida: Array<Comida>;
  public mostrarComida: Array<Comida>;
  public categoria: Array<any>;
  public comidaSeleccionada: string;
  datosComida = '';

  public categorias = {'categoria': ['todas', 'hamburguesas', 'donas', 'sushi', 'pizzas']};
  
  
  constructor(private servidor: ComidaService) {}

  ngOnInit () {

    this.servidor.obtenerComida().subscribe(data => {
    this.comida = data
    this.mostrarComida = data
    this.devolverComida()
    })
    
  }

  filtroComida( event: any ) {
    const catego = event.detail.value;
    if (catego == 'todas') {
      this.ngOnInit();
    } else {
      this.servidor.obtenerComida().subscribe(data => {
          const temp = data.filter(x => x.categoria == catego)
          this.comida = temp;
          this.mostrarComida = temp;
          this.devolverComida();
      })
    }
    
    
  }
    

  public llamarComida() {
    let listaComidas = []
    if (this.comidaSeleccionada) {
      listaComidas = this.comida.filter(x => x.categoria == this.comidaSeleccionada)
      this.mostrarComida = listaComidas
      console.log(listaComidas);
    }else if(!this.comidaSeleccionada){
      this.mostrarComida = this.comida
    }
  }

  public traerComida(categoria: any) {
    this.llamarComida()
    this.datosComida = categoria.detail.value;
    
  }

  public devolverComida() {
    let misComidas = []
    for (let i = 0; i < this.comida.length; i++) {
      misComidas.push(this.comida[i])       
    }
    this.categoria = [...new Set(misComidas)]

  };
}