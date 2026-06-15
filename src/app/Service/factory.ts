import { HamBurger, CheeseBurger, DoubeHamburger } from "./burger.service";

const value: number = 1;
export function useFactory(){


     if (value == 0) {
        return new HamBurger();
    } 
    else if(value == 1){
        return new DoubeHamburger();
    }
    else if (value ==2){
        return new CheeseBurger();
    }

    throw new Error('Unsupported burger type value: ' + value);
}