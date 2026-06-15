import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
   getUsers() {
    return ['A', 'B', 'C'];
  }
}
