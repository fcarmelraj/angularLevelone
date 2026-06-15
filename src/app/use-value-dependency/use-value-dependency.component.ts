import { Component, Inject } from '@angular/core';
import { API_URL } from '../Service/api.token';

@Component({
  selector: 'app-use-value-dependency',
  templateUrl: './use-value-dependency.component.html',
  styleUrls: ['./use-value-dependency.component.css'],
  providers:[{
    provide:API_URL,
    useValue:'google.com'
  }]
})
export class UseValueDependencyComponent {
  constructor(@Inject(API_URL) readonly apiUrl:string){
    console.log(this.apiUrl)
  }
}
