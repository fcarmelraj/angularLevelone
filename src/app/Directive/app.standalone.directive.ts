import { Directive } from "@angular/core";
import { BorderDirective } from "./border.directive";
import { BackgroundDirective } from "./background.directive";

@Directive({
    selector:'[appBorder]',
    hostDirectives:[BorderDirective, BackgroundDirective],
    standalone:true,    
})

// This will execute only 

export class BorderStandAloneDirective{
    constructor(){}
}