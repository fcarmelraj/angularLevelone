import {Pipe, PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name: 'pureSort',
    pure:true
})

export class PureSortCustomPipe implements PipeTransform {
    transform(array: number[],args?:any):any{
        return array.sort((a,b) => a - b);
    }
}