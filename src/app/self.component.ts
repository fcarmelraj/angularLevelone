import {Component} from '@angular/core';

@Component({
  selector: 'app-self',
  template: '<h1>{{name}} : Dynamic Values</h1>',
  styles: ['h1 { color: blue; }', 'h1 { font-size: 24px; }']
})
export class SelfComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}