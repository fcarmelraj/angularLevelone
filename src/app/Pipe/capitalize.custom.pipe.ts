import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizeCustomPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    // return value.charAt(0).toUpperCase() + value.slice(1);
    //  return value
    // .toLowerCase()
    // .replace(/([.!?])(\w)/g, '$1 $2')
    // .replace(/(^\s*\w|[.!?]\s*\w)/g, match => match.toUpperCase());
    return value.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
  }
}