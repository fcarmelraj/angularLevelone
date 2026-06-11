import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  parent:string='This is a message from child to parent';
  childList: string[] = ['Child Item 1', 'Child Item 2', 'Child Item 3'];
  /**
   * messageToParent is the custom event that will be emitted to the parent component
   */
  @Output() messageToParent = new EventEmitter<{ message: string; childList: string[] }>();
  sendMessageToParent() {
    this.messageToParent.emit({ message: this.parent, childList: this.childList });
  }
  @Input() title: string = '';
  @Input() list: string[] = [];
  @Input() number: number = 0;
}
