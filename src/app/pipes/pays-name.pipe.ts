import { Pipe, PipeTransform } from '@angular/core';
import Data from '../../assets/iso2ToName.json';

@Pipe({
  name: 'paysName'
})
export class PaysNamePipe implements PipeTransform {

  transform(codePays: any): unknown {
    return (Data as any)[codePays];
  }

}
