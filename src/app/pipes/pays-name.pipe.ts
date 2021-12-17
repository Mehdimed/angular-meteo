import { Pipe, PipeTransform } from '@angular/core';
import Data from '../../assets/iso2ToName.json';

@Pipe({
  name: 'paysName'
})
export class PaysNamePipe implements PipeTransform {
// renvoie le nom du pays par rapport à son code iso 2 donné par l'api meteo
  transform(codePays: any): unknown {
    return (Data as any)[codePays];
  }

}
