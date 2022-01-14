import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (undefined !== value && value.length === 12) {
      //(91) 88-672-05331
      return '(' + value.substring(0, 2) + ') ' +
       value.substring(2, 4) + '-' + value.substring(4, 7) + '-' +
        value.substring(7);
    }
    return '';
  }

}
