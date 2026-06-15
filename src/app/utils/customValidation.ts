import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forBiddenWods(words: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.toLowerCase();

        if (value && words.includes(value)) {
            return { forBiddenWods: { value } };
        }

        return null;
    };
}