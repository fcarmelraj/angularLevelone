import { Directive } from "@angular/core";
import { Validator, NG_VALIDATORS, ValidationErrors, AbstractControl } from "@angular/forms";

@Directive({
    selector: '[email-validator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: emailValidatorDirector, multi: true }]
})

export class emailValidatorDirector implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        const email = control.value;
        const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = reg.test(email);
        const message = {
            email: {
                message: 'Should be a valid email'
            }
        };
        return isValid ? null : message;
    }
}