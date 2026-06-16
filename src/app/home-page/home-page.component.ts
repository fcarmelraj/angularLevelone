import { Component } from '@angular/core';
import { BorderStandAloneDirective } from '../Directive/app.standalone.directive';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',  
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  inputValue = '111';
  firstName:string='sam';
  textColor:string = 'blue';
  isActive:boolean = true;
  isBorder:boolean = false;
  placeHolder:string = 'Enter your name';
  navStyle='font-size: 20px; color: red; font-weight: bold;';
  navClass='fontSize20 colorItalic';
  showAlert(Event: any) {
    console.log('Button clicked!', Event);
    // alert('Button clicked!');
  }
}
