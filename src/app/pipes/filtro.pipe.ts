import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], buscar: string,): any[] {
    if (buscar === ''){
      return arreglo;
    }

    buscar = buscar.toLowerCase();

    return arreglo.filter(item => {
      // console.log(arreglo);
  
      if (item.nombre.toLowerCase().includes(buscar)) {
        // console.log(item);
        return item;
      }
    });
  }
}
