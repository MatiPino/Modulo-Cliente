import { Pipe, PipeTransform } from '@angular/core';
import { Comida } from 'src/interface/Comida';

@Pipe({
  name: 'filtroR'
})
export class RestaurantesPipe implements PipeTransform {


  transform(value: Array<Comida>, id: number): any{
    let result = []
    let result2 = [1,2,3]
    console.log(value.length);
    

    for (let i = 0; i < value.length; i++) {
      if (value[i].restauranteID == id) {
        result.push(value[i])
      } 
    }


    // value.forEach(e => {
    //   if (e.restauranteID == id) {
    //     result.push(e)
    //   }
    // });

    // for (const elemento of lista) {
    //   console.log(elemento);
      
    // }
    
    // console.log(value);
    
    return value


  }

}
