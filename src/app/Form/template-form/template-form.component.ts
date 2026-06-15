import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Interface/user.interface'; 

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  constructor(){
    
  }
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  
  onSubmit(signupForm: NgForm): void {
    console.log('Form submitted');
    console.log('Form value:', signupForm.value);
    console.log('User first name:', this.user.firstName);
    console.log('User model:', this.user);
    console.log('firstName', signupForm.value.firstName);
    console.log('User Interface:',User)
  }
}
