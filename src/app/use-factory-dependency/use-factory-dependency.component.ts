import { Component } from '@angular/core';
import { HamBurger, CheeseBurger, DoubeHamburger } from '../Service/burger.service';
import { useFactory } from '../Service/factory';
@Component({
  selector: 'app-use-factory-dependency',
  templateUrl: './use-factory-dependency.component.html',
  styleUrls: ['./use-factory-dependency.component.css'],
  providers: [{provide:HamBurger, useFactory: useFactory}]
})
export class UseFactoryDependencyComponent {
  result:string;
constructor(private HamBurger:HamBurger){
  this.result = HamBurger.type;
}
}
