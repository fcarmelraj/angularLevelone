import { Directive } from "@angular/core";
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors, AbstractControl } from "@angular/forms";

@Directive({
    selector: '[age-validate]',
    providers: [{provide: NG_VALIDATORS ,useExisting: AgeValidatorDirective, multi:true}]
})

export class AgeValidatorDirective implements Validator{
    validate(control: FormControl): ValidationErrors | null {
        const number = Number(control.value);
        const isValid = !isNaN(number) && number >= 18 && number <= 85;
        const mesage ={
            'age':{
                'message':'The age must be valid between 18 and 85'
            }
        }
        return isValid ? null : mesage;
    }
}