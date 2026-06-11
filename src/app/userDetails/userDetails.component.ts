import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.css']
})

export class UserDetailsComponent {
      peopleList: any[] = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 22 },
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 22 },
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 22 }
  ];

  employeeList: any[] = [
    { name: 'David', code: 1, gender: 'Male', age: 30, department: 'HR', salary: 50000 },
    { name: 'Eve', code: 2, gender: 'Female', age: 25, department: 'IT', salary: 60000 },
    { name: 'Frank', code: 3, gender: 'Male', age: 40, department: 'Finance', salary: 70000 },
    { name: 'Sam', code: 1, gender: 'Male', age: 30, department: 'HR', salary: 50000 },
    { name: 'Sanika', code: 2, gender: 'Female', age: 25, department: 'IT', salary: 60000 },
    { name: 'Alex', code: 3, gender: 'Male', age: 40, department: 'Finance', salary: 70000 },
    { name: 'Manish', code: 1, gender: 'Male', age: 30, department: 'HR', salary: 50000 },
    { name: 'Jothy', code: 2, gender: 'Female', age: 25, department: 'IT', salary: 60000 },
    { name: 'Pamila', code: 3, gender: 'Female', age: 40, department: 'Finance', salary: 70000 }
  ];

  trackByName(employee: any): string {
    return employee.name;
  }

}