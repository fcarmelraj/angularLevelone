import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'impureSort',
    pure:false
})

export class ImpureSortCustomPipe implements PipeTransform {
     transform(array: number[],args?:any):any{
        return array.sort((a,b) => a - b);
    }
}