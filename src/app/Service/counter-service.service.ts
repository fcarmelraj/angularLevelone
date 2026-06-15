import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  value=0;
  constructor() { }
  increase(){
    this.value++;
    console.log('Counter is getting triggered>')
  }
}
