import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserloginRegisterService } from '../services/userlogin-register.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: UserloginRegisterService,
    private router: Router
  ) {}

  // to gaurd the special events ..
  // check whether there exits an token inside the localstorage and if yes continues to show special events
  // else just navigate to the login for token generation and return false
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
