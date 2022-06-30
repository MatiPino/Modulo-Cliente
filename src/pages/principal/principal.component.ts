import { Component, OnInit, ViewChild } from '@angular/core';
import { ComidaService } from 'src/service/comida.service';
import { Comida } from 'src/interface/Comida';
import { IonSlides } from '@ionic/angular';
import { FiltroPipe } from 'src/pipes/filtro.pipe';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent implements OnInit{

  private comida: Array<Comida>;
  public mostrarComida: Array<Comida>;
  public categoria: Array<any>;

  public valorSeleccionado: string;

  @ViewChild('slides',{static:true}) slides: IonSlides;

  constructor(public servicio: ComidaService) {
  }

  ngOnInit () {
    this.servicio.obtenerComida().subscribe(data => {
      this.comida = data
      this.mostrarComida = data
      this.devolverCategoria()
    })
  }

  ionSlideDidChange(event){
    // console.log("ionSLideDidChange", event)
    this.slides.getActiveIndex().then(index=>{
      console.log(index)
    })
  }

  ionSlideReachEnd(event){
    //console.log("ionSlideReachEnd", event)
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
    }else if(!this.valorSeleccionado){
      this.mostrarComida = this.comida;
    }
  }
}

