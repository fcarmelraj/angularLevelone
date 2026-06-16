import { Component, inject, Injector } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';
import { Car } from '../Service/car.service';
import { CounterServiceService } from '../Service/counter-service.service';
import { noConstructoService, HomeProducts } from '../Service/nocontructor.service';

@Component({
  selector: 'app-depedency-injection',
  templateUrl: './depedency-injection.component.html',
  styleUrls: ['./depedency-injection.component.css']
})
export class DepedencyInjectionComponent {
  public fruitsService = inject(noConstructoService);
  // const injector = inject(Injector);
// const service = injector.get(HomeProducts);
  // public products = inject.get(HomeProducts)
  user!:string[];
  myCar:string;
  myCount:number;
  fruits: string[]=[];
  
  constructor(private UserServiceService:UserServiceService, Car:Car, private counterService:CounterServiceService ){
      this.user = this.UserServiceService.getUsers();
      this.myCar = Car.val;
      this.myCount = this.counterService.value;
  }

  ngOnInit(){
       this.fruits = this.fruitsService.getFruits();
       console.log('one>>',this.fruitsService);
      console.log('two>>',typeof this.fruitsService.getFruits);
  }
  

  counteIncrement(){
    this.counterService.increase();
    this.myCount = this.counterService.value;
  }
}
