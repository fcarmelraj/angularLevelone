import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { User } from 'src/app/Interface/user.interface';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  user: User = new User();

  constructor() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  save(){
    console.log('Form submitted.');
    if(this.signupForm.valid){      
      console.log('First Name : ', this.signupForm.get('firstName')?.value);
      console.log('Form value : ', this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {}
}
