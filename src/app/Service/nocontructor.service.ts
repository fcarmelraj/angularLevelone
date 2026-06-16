import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class noConstructoService {

  getFruits() {
    return ['Banana', 'Apple', 'Orange'];
  }
}

export class HomeProducts{
    getProducts(){
        return ['table','fan','frideg']
    }
}