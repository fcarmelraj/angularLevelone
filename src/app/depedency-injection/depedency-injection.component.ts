import { Component } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';
import { Car } from '../Service/car.service';
import { CounterServiceService } from '../Service/counter-service.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-depedency-injection',
  templateUrl: './depedency-injection.component.html',
  styleUrls: ['./depedency-injection.component.css']
})
export class DepedencyInjectionComponent {
  user!:string[];
  myCar:string;
  myCount:number;
  constructor(private UserServiceService:UserServiceService, Car:Car, private counterService:CounterServiceService ){
      this.user = this.UserServiceService.getUsers();
      this.myCar = Car.val;
      this.myCount = this.counterService.value;
  }

  counteIncrement(){
    this.counterService.increase();
    this.myCount = this.counterService.value;
  }
}
