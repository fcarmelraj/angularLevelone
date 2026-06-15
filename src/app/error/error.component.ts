import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  throwErrorOne(){
    console.log('you clicked button 1')
    throw new Error('Some error ocured')
  }

    throwErrorTwo(){
    console.log('you clicked button 2')
    throw new Error('Some error ocured')
  }
}
