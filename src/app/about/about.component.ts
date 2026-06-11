import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutList: any[] = [
    { name: 'name1', age: 20 },
    { name: 'name2', age: 35 },
    { name: 'name3', age: 30 }
  ];
  status:number = 2;

}
