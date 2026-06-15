import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/Interface/user.interface';
import { AbstractControl, Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-one',
  templateUrl: './template-form-one.component.html',
  styleUrls: ['./template-form-one.component.css']
})
export class TemplateFormOneComponent implements OnInit {
  @ViewChild('signupForm') signupForm!:NgForm;
  user!:User;
  ngOnInit(): void {
    this.user = new User();
  }

  get form():{[key:string]:AbstractControl;}{
    return this.signupForm.controls;
  }

  save(){
    console.log('Form is submitted');
    if(this.signupForm.valid){
      console.log('Form data:', this.user);
      // console.log('User model:', this.user);
      // console.log('First Name:', this.user.firstName);
      // console.log('Last Name:', this.user.lastName);
      // console.log('Email:', this.user.email);
      // console.log('Password:', this.user.password);

    } else {
      console.log('Form is invalid');
    }
  }
}
