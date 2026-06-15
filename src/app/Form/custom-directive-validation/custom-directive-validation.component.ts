import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-custom-directive-validation',
  templateUrl: './custom-directive-validation.component.html',
  styleUrls: ['./custom-directive-validation.component.css']
})
export class CustomDirectiveValidationComponent implements OnInit {
  validatorForm:any;
  constructor(private form:FormBuilder){
    this.validatorForm = new FormGroup({
      'name':new FormControl(),
      'email':new FormControl(),
      'age':new FormControl(),
      'address':new FormGroup({
          'country': new FormControl(),
          'city': new FormControl()
      })
    });
  }

  register(validateForm:any){
    console.log('Registered Successfull');
    console.log(validateForm.value);
    alert('Hi' + validateForm.value.name + 'Your information are valid.')
  }

  getControls(){
    return (this.validatorForm.get('address') as FormArray).controls;
  }

  ngOnInit(): void {    
  }
}
