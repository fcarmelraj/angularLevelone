import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html',
  styleUrls: ['./life-cycle-parent.component.css']
})
export class LifeCycleParentComponent {
  status = false;
  prop = 'Hello'
  // sam!:string;
}
