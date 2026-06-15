import { Component } from '@angular/core';
import { HamBurger, CheeseBurger, DoubeHamburger } from '../Service/burger.service';
@Component({
  selector: 'app-use-class-dependency',
  templateUrl: './use-class-dependency.component.html',
  styleUrls: ['./use-class-dependency.component.css'],
  providers: [{ provide: HamBurger, useClass: HamBurger }]
})
export class UseClassDependencyComponent {
  result:string;
  constructor(private HamBurger:HamBurger){
    this.result = HamBurger.type;
  }
}
