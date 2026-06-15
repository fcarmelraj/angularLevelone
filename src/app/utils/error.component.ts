// import { Component, OnInit, Input } from "@angular/core";
// import { AbstractControlDirective, AbstractControl } from "@angular/forms";

// @Component({
//     selector:'errors',
//     template:`
//         <ul *ngIf="showErrors()">
//             <li style="color:red" *ngFor="let error of errors()">{error}</li>
//         </ul>        
//     `
// })

// export class ErrorComponentOne implements OnInit{
//     constructor(){}

//     ngOnInit(): void {}

//     private static readonly errorMessage={
//         'required': ()=>'This field is required',
//         'minlength': (params:any)=> 'This min number of character '+params.requiredLength,
//         'maxlength': (params:any)=> 'This max numer of character'+params.requiredLength,
//         'pattern': (params:any)=> 'The required pattern is'+params.requiredPattern,
//         'age': (params:any)=> params.message,
//         'email': (params:any)=> params.message
//     }

//     @Input() control: AbstractControlDirective | AbstractControl

//     showErrors():boolean{
//         return this.control && 
//         this.control.errors &&
//         (this.control.dirty || this.control.touched)
//     }

//     errors(): string[]{
//         return  Object.keys(this.control.errors)
//         .map(field =>this.getMessage(field, this.control.errors[field]))
//     }

//     private getMessage(type:string, params:any){
//         return ErrorComponent.errorMessage[type](params)
//     }
// }

import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  AbstractControlDirective
} from '@angular/forms';

@Component({
  selector: 'errors',
  template: `
    <ul *ngIf="showErrors()">
      <li
        *ngFor="let error of errors()"
        style="color:red"
      >
        {{ error }}
      </li>
    </ul>
  `
})
export class ErrorComponentOne {

  @Input()
  control!: AbstractControlDirective | AbstractControl | null;

  private static readonly errorMessages: any = {
    required: () => 'This field is required',

    minlength: (params: any) =>
      'Minimum characters required: ' +
      params.requiredLength,

    maxlength: (params: any) =>
      'Maximum characters allowed: ' +
      params.requiredLength,

    pattern: (params: any) =>
      'Required pattern: ' +
      params.requiredPattern,

    age: (params: any) =>
      params.message,

    email: (params: any) =>
      params.message
  };

  showErrors(): boolean {
    return !!(
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  errors(): string[] {
    if (!this.control?.errors) {
      return [];
    }

    return Object.keys(this.control.errors)
      .map(error =>
        this.getMessage(
          error,
          this.control!.errors![error]
        )
      );
  }

  private getMessage(type: string, params: any): string {

    const message =
      ErrorComponentOne.errorMessages[type];

    return message
      ? message(params)
      : 'Invalid field';
  }
}