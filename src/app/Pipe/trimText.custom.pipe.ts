import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'trimText'
})
export class TrimTextCustomPipe implements PipeTransform {
  transform(value: string, limit: number = 5): string {
    if (!value) return value;
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}