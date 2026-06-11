
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  list: string[] = ['Item 1', 'Item 2', 'Item 3'];
  number:number = 0;
  message: string = '';
  childList: string[] = [];
  generateRandomList() {
    this.number = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
  }
  
  onReceiveMessage(event: { message: string; childList: string[] }) {
    this.message = event.message;
    this.childList = event.childList;
  }
}
