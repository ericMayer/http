import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceText'
})
export class ReduceTextPipe implements PipeTransform {

  transform(text: string, caracteres: number): string {
    if (text && text.length > caracteres) 
      return `${text.substr(0, caracteres)} ...`;
    return text;
  }

}
