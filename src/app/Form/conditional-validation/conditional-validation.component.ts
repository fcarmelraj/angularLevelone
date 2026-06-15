import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conditional-validation',
  templateUrl: './conditional-validation.component.html',
  styleUrls: ['./conditional-validation.component.css']
})
export class ConditionalValidationComponent implements OnInit {
  public addressForm!:FormGroup;
  constructor(private formBuilder:FormBuilder){}  
  
  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      street: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{1,4}$')]],
      country: ['US']
    });

    this.addressForm.get('country')?.valueChanges.subscribe(
      (country:string)=>{
        if(country === 'US'){
          this.addressForm.get('postalCode')?.setValidators([Validators.required, Validators.pattern('^[0-9]{1,4}$')]);
        } else if(country === 'CA'){
          this.addressForm.get('postalCode')?.setValidators([Validators.required, Validators.pattern('^[A-Za-z]{3}[0-9]{3}$')]);
        }
        this.addressForm.get('postalCode')?.updateValueAndValidity();
      }
    )
  }

  save(){
    console.log('Form Submitted : ', this.addressForm);
    if(this.addressForm.valid){
      console.log('Saved : ', JSON.stringify(this.addressForm.value));
    }
  }
}
