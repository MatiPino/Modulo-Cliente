import { Pipe, PipeTransform } from '@angular/core';
import { Comida } from 'src/app/interface/Comida';

@Pipe({
  name: 'filtroR'
})
export class RestaurantesPipe implements PipeTransform {


  transform(value: Array<Comida>, id: number): any{
    let result = []
    let result2 = [1,2,3]
    console.log(value.length);
    
    return value

  }

}
