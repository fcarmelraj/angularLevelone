import { Component, Inject, InjectionToken } from '@angular/core';
import { HamBurger, CheeseBurger, DoubeHamburger } from '../Service/burger.service';
// const token1='SomeKey';
// const token2='SomeKey1';
const token1= new InjectionToken('SomeKey1');
const token2 = new InjectionToken('SomeKey1');
@Component({
  selector: 'app-injection-tokens',
  templateUrl: './injection-tokens.component.html',
  styleUrls: ['./injection-tokens.component.css'],
  providers:[{provide:token1, useClass:HamBurger},
             {provide:token2, useClass:DoubeHamburger}
            ]
})
export class InjectionTokensComponent {
  constructor(@Inject(token1) h1:any, @Inject(token2) h2:any){
    console.log(h1,h2)
  }
  
}
