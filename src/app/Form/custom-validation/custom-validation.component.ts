import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user1 } from 'src/app/Interface/user1.interface';
import { forBiddenWods } from 'src/app/utils/customValidation';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {
  signupForm: FormGroup;
  user: user1 = new user1();

  constructor(){
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      department: new FormControl('', [Validators.required, forBiddenWods(['admin', 'root', 'superuser'])])
    });
  }

  save(){
    console.log('Form Submitted');
    if(this.signupForm.valid){
      console.log('Form Data: ', this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  
  ngOnInit(): void {}
}
