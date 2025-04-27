import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ativo'
})
export class AtivoPipe implements PipeTransform {

  transform(ativo: boolean): string {
    if (ativo) {
      return 'Sim';
    } else {
      return 'Não'
    }
  }

}
