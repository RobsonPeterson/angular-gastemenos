import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Despesa': return 'trending_down';
      case 'Receita': return 'trending_up';
    }
    return 'trending_up';
  }

}
