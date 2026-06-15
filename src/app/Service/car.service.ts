import { Injectable } from "@angular/core";
@Injectable()
export class Fuel{
    message:string;
    constructor(){
        console.log('contructor of fuel class created')
        this.message='fuel is of type';
    }   
}

@Injectable()
export class FuelInjector{
    val:string;
    constructor(private f:Fuel){
        console.log('contructor for FuelInjector of class created')
        this.val = 'FuelInjctor>'+ this.f.message;
    }
}

@Injectable()
export class Piston{
    val:string;
    constructor(private f1:FuelInjector){
        console.log('contructor Piston of class created')
        this.val = 'Piston>' + this.f1.val;
    }
}

@Injectable()
export class Engine {
    val:string;
    constructor(private p:Piston) {
        console.log('constructor Engine class created')
        this.val = 'Engine>'+ this.p.val;
    }
}

@Injectable()
export class Car{
    val:string;
    constructor(private e:Engine){
        console.log('contructor car class is created')
        this.val = 'car>' + this.e.val;
    }
}
