import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(user: User): boolean {
    if (user.username === 'isoguzay' && user.password === '123456') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.username);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
