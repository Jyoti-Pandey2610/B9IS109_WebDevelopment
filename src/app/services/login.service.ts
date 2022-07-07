import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webService: WebService) { }

  isLoggedIn() {
    let y = localStorage.getItem("isLoggedIn");
    if ( y == "true" ) return true
    return false;
  }

  doLogin(credential: any) {
    return this.webService.post('/api/user', credential);
  }

  loggedIn() {
    localStorage.setItem("isLoggedIn", "true");
  }
}
