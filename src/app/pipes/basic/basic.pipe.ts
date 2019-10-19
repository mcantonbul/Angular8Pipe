import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basic'
})
export class BasicPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(value)
      return `${value}-${value.length}`;
  }

}
