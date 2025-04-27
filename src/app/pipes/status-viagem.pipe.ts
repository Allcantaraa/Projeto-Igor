import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusViagem'
})
export class StatusViagemPipe implements PipeTransform {

  transform(status : number): string {
    if (status != 1 && status != 2) {
      return 'Status inválido';
    }

    if (status === 1) {
      return 'Em andamento';
    } else {
      return 'Concluida;'
    }
  }

}
