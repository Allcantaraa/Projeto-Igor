import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placa'
})
export class PlacaPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';
    const placa = value.toUpperCase().replace(/[^A-Z0-9]/g, '');

    // Formato antigo: ABC1234
    if (/^[A-Z]{3}[0-9]{4}$/.test(placa)) {
      return `${placa.slice(0, 3)}-${placa.slice(3)}`;
    }

    // Formato Mercosul: ABC1D23
    if (/^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(placa)) {
      return `${placa.slice(0, 3)}-${placa.slice(3)}`;
    }

    return value;
  }
}
