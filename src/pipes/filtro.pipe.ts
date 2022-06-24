import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    if ( texto === '') {
      return arreglo;
    }

    texto = texto.toUpperCase();
    
    return arreglo.filter( categoria => {
      return categoria.nombre.toUpperCase().includes( texto );
    })

  }

}
