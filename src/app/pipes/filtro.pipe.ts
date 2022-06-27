import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if (texto === ''){
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(item => {
      if (item.toLowerCase().includes(texto)) {
        console.log(item);
        return item;
      }
    });
  }

}
