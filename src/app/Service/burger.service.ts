import { Injectable } from "@angular/core";

@Injectable()
export class HamBurger{
    type:string;
    constructor(){
        console.log('constructor of HamBurger Called');
        this.type='HamBurger';
    }
} 

@Injectable()
export class DoubeHamburger extends HamBurger{
    constructor(){
        super();
        console.log('constructor of DoubeHamburger Called');
        this.type='DoubleHamburger';
    }
}

@Injectable()
export class CheeseBurger extends DoubeHamburger{
    constructor(){
        super();
        console.log('constructor of CheeseBurger Called');
        this.type='CheeseBurger'
    }
} 